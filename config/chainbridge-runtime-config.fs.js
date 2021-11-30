window.__RUNTIME_CONFIG__ = {
  CHAINBRIDGE: {
    chains: [
      {
        chainId: 3,
        networkId: 3,
        name: "Ethereum Ropsten",
        decimals: 18,
        bridgeAddress: "0x4b76f4E29C1f1372ADB2b40F8235fdD2bEE8E207",
        erc20HandlerAddress: "0xf253eB9691507c49cBd09f3e7647718ef4014CB4",
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
            destChainId: [4, 254],
          },
          {
            address: "0xe0C19A39d750Bc83287f0F71958EE3b9AA50503d",
            name: "ArbitraryToken",
            symbol: "ARB",
            // imageUri: "ETHIcon",
            resourceId:
              "0x0000000000000000000000e0C19A39d750Bc83287f0F71958EE3b9AA50503d03",
            destChainId: [4],
          },
        ],
      },
      {
        chainId: 4,
        networkId: 42,
        name: "Ethereum Kovan",
        decimals: 18,
        bridgeAddress: "0x6561b9F149e3945f8Df90e336473E8b3D52B0723",
        erc20HandlerAddress: "0x8Bac5F516E67b6bfd9a6E3A7cb43838761a898f9",
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
            destChainId: [3, 4],
          },
        ],
      },
    ],
  },
};
