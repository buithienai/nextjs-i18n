import luckyNumberABI from '../cross-env/abis/luckyNumber.json';
import jackpotABI from '../cross-env/abis/jackpot.json';

export default {
    urlWeb: '',
    urlApi: 'https://api.goldpegas.io/',
    linkEtherscan: 'https://bscscan.com',
    chainId: ['0x38', '56', 56],
    nameChain: "Binance Smart Chain",
    linkRPC: 'https://bsc-dataseed2.defibit.io/',
    contracts: {
        gdp: {
            address: '0xe724279dCB071c3996A1D72dEFCF7124C3C45082',
        },
        luckyNumber: {
            address: '0xC1Acc56DD0302Caf071f50CF7a264DDFd2Fa65e5',
            abi: luckyNumberABI
        },
        jackpot: {
            address: '0xe928eEBF6BdF422cE4154cf69A29f3c754bFcDD9',
            abi: jackpotABI
        }
    }
}