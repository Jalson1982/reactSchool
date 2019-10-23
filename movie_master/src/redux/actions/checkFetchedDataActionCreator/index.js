import {
    GET_DATA,
    GET_DATA_REJECTED
} from './types';

export const fetchData = (bool) => {

    return {
        type: GET_DATA,
        payload: bool,
    };
}

export const fetchDataFulfilled = (type, data, name) => {
    return {

        type: type,
        payload: {
            data: data,
            name: name,
            searched: true,
            loading: false
        }
    };
}

export const fetchDataRejected = (error) => {

    return {
        type: GET_DATA_REJECTED,
        payload: {
            error: error,
            loading: false
        }
    }
}