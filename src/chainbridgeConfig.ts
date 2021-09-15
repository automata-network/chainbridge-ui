export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type ChainType = "Ethereum" | "Substrate";

export type BridgeConfig = {
  networkId?: number;
  chainId: number;
  name: string;
  rpcUrl: string;
  type: ChainType;
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  decimals: number;
  existential?: number;
};

export type EvmBridgeConfig = BridgeConfig & {
  bridgeAddress: string;
  erc20HandlerAddress: string;
  type: "Ethereum";
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  deployedBlockNumber?: number;
};

export type SubstrateBridgeConfig = BridgeConfig & {
  type: "Substrate";
  chainbridgePalletName: string;
  bridgeFeeFunctionName?: string; // If this value is provided, the chain value will be used will be used
  bridgeFeeValue?: number; // If the above value is not provided, this value will be used for the fee. No scaling should be applied.
  transferPalletName: string;
  transferFunctionName: string;
  typesFileName: string;
};

export type ChainbridgeConfig = {
  chains: Array<EvmBridgeConfig | SubstrateBridgeConfig>;
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Local GETH <> Local Substrate
  chains: [
    {
      chainId: +((process.env
        .REACT_APP_ETHEREUM_CHAIN_ID as unknown) as number),
      networkId: +((process.env
        .REACT_APP_ETHEREUM_NETWORK_ID as unknown) as number),
      name: process.env.REACT_APP_ETHEREUM_NETWORK_NAME as string,
      decimals: 18,
      bridgeAddress: process.env.REACT_APP_ETHEREUM_BRIDGE_ADDRESS as string,
      erc20HandlerAddress: process.env
        .REACT_APP_ETHEREUM_ERC20_HANDLER_ADDRESS as string,
      rpcUrl: process.env.REACT_APP_ETHEREUM_RPC_URL as string,
      blockExplorer: process.env.REACT_APP_ETHEREUM_EXPLORER_URL as string,
      type: "Ethereum",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: process.env.REACT_APP_ETHEREUM_ERC20_TOKEN_ADDRESS as string,
          name: process.env.REACT_APP_ETHEREUM_ERC20_NAME as string,
          symbol: process.env.REACT_APP_ETHEREUM_ERC20_SYMBOL as string,
          // imageUri: ATAIcon,
          resourceId: process.env.REACT_APP_ETHEREUM_RESOURCE_ID as string,
        },
      ],
    },
    {
      chainId: +((process.env
        .REACT_APP_ATA_BRIDGECHAIN_ID as unknown) as number),
      networkId: +((process.env.REACT_APP_ATA_NETWORK_ID as unknown) as number),
      name: process.env.REACT_APP_ATA_NETWORK_NAME as string,
      decimals: 18,
      rpcUrl: process.env.REACT_APP_ATA_RPC_URL as string,
      type: "Substrate",
      nativeTokenSymbol: "ATA",
      chainbridgePalletName: "chainBridge",
      bridgeFeeValue: 0,
      transferPalletName: "bridgeTransfer",
      transferFunctionName: "transferNative",
      typesFileName: "bridgeTypes.json",
      existential: 0.01,
      tokens: [
        {
          address: "substrate-native",
          name: "ATA",
          symbol: "ATA",
          resourceId: "substratsubme-native",
        },
      ],
    },
  ],
};
