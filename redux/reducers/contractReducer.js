import { UPDATE_DATA_CONTRACT, CREATE_CONTRACT_SUCCESS, CREATE_TRONWEB } from '../constants/appConstants';

const initialState = {
    chainId: '',
    binanceChain: null,
    isPopupDetect: false,
    isBinanceChain: false,
    listContract: {}
};

export default function contractReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA_CONTRACT:
            return {
                ...state,
                ...action.data
            };
        case CREATE_CONTRACT_SUCCESS:
            return {
                ...state,
                listContract: action.data
            };
        case CREATE_TRONWEB:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}