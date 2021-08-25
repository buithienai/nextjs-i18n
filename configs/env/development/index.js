import luckyNumberABI from '../cross-env/abis/luckyNumber.json';
import jackpotABI from '../cross-env/abis/jackpot.json';

export default {
    urlWeb: '',
    urlApi: 'https://api-dev.goldpegas.io/',
    linkEtherscan: 'https://testnet.bscscan.com',
    chainId: ['0x61', '97', 97],
    nameChain: "Binance Smart Chain Testnet",
    linkRPC: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    contracts: {
        gdp: {
            address: '0x33eb4d829a9c5224E25Eb828E2a11550308c885E',
        },
        luckyNumber: {
            address: '0x2D5064a8f23C2375Daf64cF853Ac599377474A10',
            abi: luckyNumberABI
        },
        jackpot: {
            address: '0xd4fa0bb080f578a38145930722CA72F75fC7EAf4',
            abi: jackpotABI
        }
    }
}