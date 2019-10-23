import {
    GET_MOVIE,

    GET_MOVIE_DETAILS,

    GET_MOVIE_VIDEO,

    GET_MOVIE_FILTER,

    GET_ALL_MOVIES,

} from "./types";
import axios from "axios";

export const fetchData = (bool) => {

    return {
        type: GET_DATA,
        payload: bool,
    };
}

export const fetchDataFulfilled = (data, type) => {
    return {

        type: type,
        payload: data,
        searched: true,
        loading: false,
    };
}

export const fetchDataRejected = (error) => {

    return {
        type: GET_DATA_REJECTED,
        payload: error,
        loading: false,
    };
}
