import { UPDATE_DATA_USER, UPDATE_DATA_CONTRACT, CREATE_CONTRACT, CREATE_CONTRACT_SUCCESS, CREATE_TRONWEB } from '../constants/appConstants';

export function updateDataContract(data) {
    return {
        type: UPDATE_DATA_CONTRACT,
        data: data
    }
}

export function updateDataUser(data) {
    return {
        type: UPDATE_DATA_USER,
        data: data
    }
}

export function createContract() {
    return {
        type: CREATE_CONTRACT
    }
}

export function listContract(data) {
    return {
        type: CREATE_CONTRACT_SUCCESS,
        data: data
    }
}

export function createTronWeb(data) {
    return {
        type: CREATE_TRONWEB,
        data: data
    }
}