import makeRequest from './httpServices';
import configs from '../../configs/index';

export function getHistoryUserRank() {
    const options = {};
    options.method = 'GET';
    options.url = configs.urlApi + `user-ranks`;
    options.headers = {
        'Content-Type': 'application/json'
    };

    return makeRequest(options);
}

export function getHistoryGame(type, address, page) {
    const options = {};
    options.method = 'GET';
    options.url = configs.urlApi + `game-histories?user=${address}&type=${type}&page=${page}`;
    options.headers = {
        'Content-Type': 'application/json'
    };

    return makeRequest(options);
}

export function getHistoryStaking(address) {
    const options = {};
    options.method = 'GET';
    options.url = configs.urlApi + `staking-histories?user=${address}`;
    options.headers = {
        'Content-Type': 'application/json'
    };

    return makeRequest(options);
}

export function getHistoryFarm(address) {
    const options = {};
    options.method = 'GET';
    options.url = configs.urlApi + `farm-histories?user=${address}`;
    options.headers = {
        'Content-Type': 'application/json'
    };

    return makeRequest(options);
}