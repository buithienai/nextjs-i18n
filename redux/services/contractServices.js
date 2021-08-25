import configs from '../../configs';

const createContract = async () => {
    const { defSwap, defToken } = configs.contracts;

    const defTokenContract = await window.tronWeb.contract().at(defToken.address);
    const defSwapContract = await window.tronWeb.contract().at(defSwap.address);

    return {
        defTokenContract,
        defSwapContract
    };
}

export default {
    createContract
}