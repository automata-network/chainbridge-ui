window.__RUNTIME_CONFIG__ = {
  CHAINBRIDGE: {
    chains: [
      {
        chainId: 3,
        networkId: 3,
        name: "Ethereum Ropsten",
        decimals: 18,
        bridgeAddress: "0x83fcf10767D17DFc5977E5152A54Da3F15D8b4b9",
        erc20HandlerAddress: "0x8e44F7417ab5829A41d627b3DD5Eafe3681481b7",
        rpcUrl: window.REACT_APP_ETHEREUM_RPC_URL,
        blockExplorer: "https://ropsten.etherscan.io/tx",
        type: "Ethereum",
        nativeTokenSymbol: "rETH",
        tokens: [
          {
            address: "0x8289b901CAC48EbBB1B5cb0049d1459EA1240EF7",
            name: "ContextFree",
            symbol: "CTX",
            // imageUri: "ETHIcon",
            resourceId:
              "0x00000000000000000000008289b901CAC48EbBB1B5cb0049d1459EA1240EF703",
          },
        ],
      },
      {
        chainId: 255,
        networkId: 11820,
        name: "Automata ContextFree",
        decimals: 18,
        rpcUrl: "wss://cf-api.ata.network",
        type: "Substrate",
        nativeTokenSymbol: "CTX",
        chainbridgePalletName: "chainBridge",
        ss58Prefix: "11820",
        bridgeFeeValue: 0,
        transferPalletName: "bridgeTransfer",
        transferFunctionName: "transferNative",
        typesFileName: "bridgeTypes.json",
        existential: 0.01,
        tokens: [
          {
            address: "substrate-native",
            name: "ContextFree",
            symbol: "CTX",
            resourceId: "substratsubme-native",
          },
        ],
      },
    ],
  },
};
