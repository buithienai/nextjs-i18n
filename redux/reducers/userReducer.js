import { UPDATE_DATA_CONTRACT, UPDATE_DATA_USER } from '../constants/appConstants';

const initialState = {
    address: '',
    chainId: '',
    balanceUSDT: 0,
    binanceChain: null,
    balanceDEF: '-',
    rate: '-'
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA_CONTRACT:
            return {
                ...state,
                ...action.data
            };
        case UPDATE_DATA_USER:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}