import { ApiPromise, WsProvider } from "@polkadot/api";
import BigNumber from "bignumber.js";
import {
  chainbridgeConfig,
  SubstrateBridgeConfig,
} from "../../../chainbridgeConfig";

export const createApi = async (rpcUrl: string) => {
  const provider = new WsProvider(rpcUrl);
  const subChainConfig = chainbridgeConfig.chains.find(
    (c) => c.rpcUrl === rpcUrl
  ) as SubstrateBridgeConfig;
  const types = (await import(`./${subChainConfig.typesFileName}`)) as any;
  return ApiPromise.create({ provider, types });
};

export const submitDeposit = (
  api: ApiPromise,
  amount: number,
  recipient: string,
  destinationChainId: number,
  homeChainId: number
) => {
  const subChainConfig = chainbridgeConfig.chains.find((c) =>
    homeChainId > 255
      ? c.chainId !== destinationChainId
      : c.chainId === homeChainId
  ) as SubstrateBridgeConfig;

  return api.tx[subChainConfig.transferPalletName][
    subChainConfig.transferFunctionName
  ](
    new BigNumber(amount)
      .multipliedBy(
        new BigNumber(10).pow(new BigNumber(subChainConfig.decimals))
      )
      .toString(10),
    recipient,
    destinationChainId
  );
};
