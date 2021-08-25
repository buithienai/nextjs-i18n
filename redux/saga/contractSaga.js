import { put, takeEvery } from 'redux-saga/effects';
import { CREATE_CONTRACT, CREATE_CONTRACT_SUCCESS } from '../constants/appConstants';
import contractServices from '../services/contractServices';

export function* initialContract() {
    try {
        let listContract = yield contractServices.createContract();

        yield put({
            type: CREATE_CONTRACT_SUCCESS,
            data: listContract
        })
    } catch (error) {
        console.log(error);
    }
}

export function* watchContract() {
    yield takeEvery(CREATE_CONTRACT, initialContract);
}