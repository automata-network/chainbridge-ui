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
  ss58Prefix?: number;
};

export type ChainbridgeConfig = {
  chains: Array<EvmBridgeConfig | SubstrateBridgeConfig>;
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Local GETH <> Local Substrate
  chains: [
    {
      chainId: +((process.env.REACT_APP_ROPSTEN_CHAIN_ID as unknown) as number),
      networkId: +((process.env
        .REACT_APP_ROPSTEN_NETWORK_ID as unknown) as number),
      name: process.env.REACT_APP_ROPSTEN_NETWORK_NAME as string,
      decimals: 18,
      bridgeAddress: process.env.REACT_APP_ROPSTEN_BRIDGE_ADDRESS as string,
      erc20HandlerAddress: process.env
        .REACT_APP_ROPSTEN_ERC20_HANDLER_ADDRESS as string,
      rpcUrl: process.env.REACT_APP_ROPSTEN_RPC_URL as string,
      blockExplorer: process.env.REACT_APP_ROPSTEN_EXPLORER_URL as string,
      type: "Ethereum",
      nativeTokenSymbol: "rETH",
      tokens: [
        {
          address: process.env.REACT_APP_ROPSTEN_ERC20_TOKEN_ADDRESS as string,
          name: process.env.REACT_APP_ROPSTEN_ERC20_NAME as string,
          symbol: process.env.REACT_APP_ROPSTEN_ERC20_SYMBOL as string,
          // imageUri: ATAIcon,
          resourceId: process.env.REACT_APP_ROPSTEN_RESOURCE_ID as string,
        },
        {
          address: process.env
            .REACT_APP_ROPSTEN_ERC20_ARB_TOKEN_ADDRESS as string,
          name: process.env.REACT_APP_ROPSTEN_ERC20_ARB_NAME as string,
          symbol: process.env.REACT_APP_ROPSTEN_ERC20_ARB_SYMBOL as string,
          // imageUri: ATAIcon,
          resourceId: process.env.REACT_APP_ROPSTEN_ARB_RESOURCE_ID as string,
        },
      ],
    },
    {
      chainId: +((process.env.REACT_APP_KOVAN_CHAIN_ID as unknown) as number),
      networkId: +((process.env
        .REACT_APP_KOVAN_NETWORK_ID as unknown) as number),
      name: process.env.REACT_APP_KOVAN_NETWORK_NAME as string,
      decimals: 18,
      bridgeAddress: process.env.REACT_APP_KOVAN_BRIDGE_ADDRESS as string,
      erc20HandlerAddress: process.env
        .REACT_APP_KOVAN_ERC20_HANDLER_ADDRESS as string,
      rpcUrl: process.env.REACT_APP_KOVAN_RPC_URL as string,
      blockExplorer: process.env.REACT_APP_KOVAN_EXPLORER_URL as string,
      type: "Ethereum",
      nativeTokenSymbol: "kETH",
      tokens: [
        {
          address: process.env.REACT_APP_KOVAN_ERC20_TOKEN_ADDRESS as string,
          name: process.env.REACT_APP_KOVAN_ERC20_NAME as string,
          symbol: process.env.REACT_APP_KOVAN_ERC20_SYMBOL as string,
          // imageUri: ATAIcon,
          resourceId: process.env.REACT_APP_KOVAN_RESOURCE_ID as string,
        },
        {
          address: process.env
            .REACT_APP_KOVAN_ERC20_ARB_TOKEN_ADDRESS as string,
          name: process.env.REACT_APP_KOVAN_ERC20_ARB_NAME as string,
          symbol: process.env.REACT_APP_KOVAN_ERC20_ARB_SYMBOL as string,
          // imageUri: ATAIcon,
          resourceId: process.env.REACT_APP_KOVAN_ARB_RESOURCE_ID as string,
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
      nativeTokenSymbol: process.env
        .REACT_APP_ATA_NATIVE_TOKEN_SYMBOL as string,
      chainbridgePalletName: "chainBridge",
      ss58Prefix: +((process.env
        .REACT_APP_ATA_SS58_PREFIX as unknown) as number),
      bridgeFeeValue: 0,
      bridgeFeeFunctionName: "bridgeFee",
      transferPalletName: "bridgeTransfer",
      transferFunctionName: "transferNative",
      typesFileName: "bridgeTypes.json",
      existential: 0.01,
      tokens: [
        {
          address: "substrate-native",
          name: process.env.REACT_APP_ATA_NATIVE_TOKEN_NAME as string,
          symbol: process.env.REACT_APP_ATA_NATIVE_TOKEN_SYMBOL as string,
          resourceId: "substratsubme-native",
        },
        {
          address: process.env.REACT_APP_KOVAN_ERC20_TOKEN_ADDRESS as string,
          name: process.env.REACT_APP_KOVAN_ERC20_NAME as string,
          symbol: process.env.REACT_APP_KOVAN_ERC20_SYMBOL as string,
          // imageUri: ATAIcon,
          resourceId: process.env.REACT_APP_KOVAN_RESOURCE_ID as string,
        },
      ],
    },
  ],
};
