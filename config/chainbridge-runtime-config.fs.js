window.__RUNTIME_CONFIG__ = {
  CHAINBRIDGE: {
    chains: [
      {
        chainId: 3,
        networkId: 3,
        name: "Ethereum Ropsten",
        decimals: 18,
        bridgeAddress: "0x9f5fFBd29C71093FA167c1C7a911B847d2F2E951",
        erc20HandlerAddress: "0xF5e2d7D65cf31Ab6c1EC5BEDF89Ee2bAA1125D61",
        rpcUrl: window.REACT_APP_ROPSTEN_RPC_URL,
        blockExplorer: "https://ropsten.etherscan.io/tx",
        type: "Ethereum",
        nativeTokenSymbol: "rETH",
        tokens: [
          {
            address: "0x907f34dd7caD6e8752dDaCF365aa25c7FA701dd9",
            name: "TestMultiChain",
            symbol: "TMC",
            // imageUri: "ETHIcon",
            resourceId:
              "0x0000000000000000000000907f34dd7caD6e8752dDaCF365aa25c7FA701dd903",
            destChainId: [42, 254],
          },
          {
            address: "0xe0C19A39d750Bc83287f0F71958EE3b9AA50503d",
            name: "ArbitraryToken",
            symbol: "ARB",
            // imageUri: "ETHIcon",
            resourceId:
              "0x0000000000000000000000e0C19A39d750Bc83287f0F71958EE3b9AA50503d03",
            destChainId: [42],
          },
        ],
      },
      {
        chainId: 42,
        networkId: 42,
        name: "Ethereum Kovan",
        decimals: 18,
        bridgeAddress: "0x9f5fFBd29C71093FA167c1C7a911B847d2F2E951",
        erc20HandlerAddress: "0xF5e2d7D65cf31Ab6c1EC5BEDF89Ee2bAA1125D61",
        rpcUrl: window.REACT_APP_KOVAN_RPC_URL,
        blockExplorer: "https://kovan.etherscan.io/tx",
        type: "Ethereum",
        nativeTokenSymbol: "kETH",
        tokens: [
          {
            address: "0xAE62312951b9518Df0c7C6Ea475E08EB443e88d7",
            name: "TestMultiChain",
            symbol: "TMC",
            // imageUri: "WETHIcon",
            resourceId:
              "0x0000000000000000000000907f34dd7caD6e8752dDaCF365aa25c7FA701dd903",
            destChainId: [3, 254],
          },
          {
            address: "0x62E01587D7FCd0B93467d0086574967EE4F6039B",
            name: "ArbitraryToken",
            symbol: "ARB",
            // imageUri: "WETHIcon",
            resourceId:
              "0x0000000000000000000000e0C19A39d750Bc83287f0F71958EE3b9AA50503d03",
            destChainId: [3],
          },
        ],
      },
      {
        chainId: 254,
        networkId: 13107,
        name: "Automata FiniteState",
        decimals: 18,
        rpcUrl: "wss://fs-api.ata.network",
        blockExplorer: "https://kovan.etherscan.io/tx",
        type: "Substrate",
        nativeTokenSymbol: "FST",
        chainbridgePalletName: "chainBridge",
        ss58Prefix: "13107",
        bridgeFeeValue: 0,
        bridgeFeeFunctionName: "bridgeFee",
        transferPalletName: "bridgeTransfer",
        transferFunctionName: "transferNative",
        typesFileName: "bridgeTypes.json",
        existential: 0.01,
        tokens: [
          {
            address: "substrate-native",
            name: "FiniteState",
            symbol: "FST",
            resourceId: "substratsubme-native",
            destChainId: [3, 42],
          },
        ],
      },
    ],
  },
};
