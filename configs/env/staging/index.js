import luckyNumberABI from '../cross-env/abis/luckyNumber.json';

export default {
    urlWeb: '',
    urlApi: 'https://api-dev.goldpegas.io/',
    linkEtherscan: 'https://testnet.bscscan.com',
    chainId: ['0x61', '97', 97],
    nameChain: "Binance Smart Chain Testnet",
    linkRPC: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    contracts: {
        gdp: {
            address: '0xe724279dcb071c3996a1d72defcf7124c3c45082',
        },
        luckyNumber: {
            address: '0x55b72cE1eB5596b08aB38d5Fd08d34529eAaEB65',
            abi: luckyNumberABI
        }
    }
}