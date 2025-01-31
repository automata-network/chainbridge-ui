import React from "react";
import { Bridge, BridgeFactory } from "@chainsafe/chainbridge-contracts";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { EvmBridgeConfig } from "../../../chainbridgeConfig";
import { useNetworkManager } from "../../NetworkManagerContext";
import { IDestinationBridgeProviderProps } from "../interfaces";
import { DestinationBridgeContext } from "../../DestinationBridgeContext";

import { getProvider } from "./helpers";

export const EVMDestinationAdaptorProvider = ({
  children,
}: IDestinationBridgeProviderProps) => {
  const {
    depositNonce,
    destinationChainConfig,
    homeChainConfig,
    tokensDispatch,
    setTransactionStatus,
    setTransferTxHash,
    setDepositVotes,
    depositVotes,
  } = useNetworkManager();

  const [destinationBridge, setDestinationBridge] = useState<
    Bridge | undefined
  >(undefined);

  useEffect(() => {
    if (destinationBridge) return;
    const provider = getProvider(destinationChainConfig);

    if (destinationChainConfig && provider) {
      const bridge = BridgeFactory.connect(
        (destinationChainConfig as EvmBridgeConfig).bridgeAddress,
        provider
      );
      setDestinationBridge(bridge);
    }
  }, [destinationChainConfig, destinationBridge]);

  useEffect(() => {
    if (
      destinationChainConfig &&
      homeChainConfig?.chainId !== null &&
      homeChainConfig?.chainId !== undefined &&
      destinationBridge &&
      depositNonce
    ) {
      destinationBridge.on(
        destinationBridge.filters.ProposalEvent(null, null, null, null),
        (
          originChainId: number,
          _depositNonce: string,
          status: any,
          resourceId: string,
          dataHash: string,
          tx: any
        ) => {
          console.log(
            "ProposalEvent event",
            { originChainId, _depositNonce },
            "compare to",
            { chainId: homeChainConfig.chainId, depositNonce }
          );

          if (
            originChainId === homeChainConfig.chainId &&
            BigNumber.from(_depositNonce).eq(BigNumber.from(depositNonce))
          ) {
            switch (BigNumber.from(status).toNumber()) {
              case 1:
                tokensDispatch({
                  type: "addMessage",
                  payload: `Proposal created on ${destinationChainConfig.name}`,
                });
                break;
              case 2:
                tokensDispatch({
                  type: "addMessage",
                  payload: `Proposal has passed. Executing...`,
                });
                break;
              case 3:
                setTransactionStatus("Transfer Completed");
                setTransferTxHash(tx.transactionHash);
                break;
              case 4:
                setTransactionStatus("Transfer Aborted");
                setTransferTxHash(tx.transactionHash);
                break;
            }
          }
        }
      );

      destinationBridge.on(
        destinationBridge.filters.ProposalVote(null, null, null, null),
        async (
          originChainId: number,
          _depositNonce: string,
          status: any,
          resourceId: string,
          tx: any
        ) => {
          console.log(
            "ProposalVote event",
            { originChainId, _depositNonce },
            "compare to",
            { chainId: homeChainConfig.chainId, depositNonce }
          );

          if (
            originChainId === homeChainConfig.chainId &&
            BigNumber.from(_depositNonce).eq(BigNumber.from(depositNonce))
          ) {
            const txReceipt = await tx.getTransactionReceipt();
            if (txReceipt.status === 1) {
              setDepositVotes(depositVotes + 1);
            }
            tokensDispatch({
              type: "addMessage",
              payload: {
                address: String(txReceipt.from),
                signed: txReceipt.status === 1 ? "Confirmed" : "Rejected",
              },
            });
          }
        }
      );
    }
    return () => {
      //@ts-ignore
      destinationBridge?.removeAllListeners();
    };
  }, [
    depositNonce,
    homeChainConfig,
    destinationBridge,
    depositVotes,
    destinationChainConfig,
    setDepositVotes,
    setTransactionStatus,
    setTransferTxHash,
    tokensDispatch,
  ]);

  return (
    <DestinationBridgeContext.Provider
      value={{
        disconnect: async () => {},
      }}
    >
      {children}
    </DestinationBridgeContext.Provider>
  );
};
