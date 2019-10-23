import {
    GET_SERIE,
    GET_SERIE_DETAILS,
    GET_SERIES_VIDEO,
    GET_BEST_SERIES,
    GET_ALL_SERIES,

} from './types';
import axios from 'axios';
import { fetchData, fetchDataFulfilled, fetchDataRejected } from '../checkFetchedDataActionCreator/index';

const API_KEY = "43960ac18720b2eb52c3207132d1a80c";

export const seriesFilter = (genres) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genres}&include_null_first_air_dates=false`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_BEST_SERIES, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const serieDetails = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_SERIE_DETAILS, res.data));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const seriesVideo = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(` https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_SERIES_VIDEO, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}
/*export const getAllSeries = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.all([castingCrew(id), serieDetails(id), seriesVideo(id)])
            .then(axios.spread(function (acct, perms, video) {
                return [acct, perms, video]
            }))
    }
}*/


