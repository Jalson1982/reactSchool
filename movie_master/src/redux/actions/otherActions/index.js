import {
    GET_NOW_PLAY,
    GET_CASTING_CREW,
    GET_COMING_SOON,
    GET_BEST_ACTORS,
    GET_CATEGORY_FILTER
} from './types';
import axios from 'axios';
import { fetchData, fetchDataFulfilled, fetchDataRejected } from '../checkFetchedDataActionCreator/index';
const API_KEY = "43960ac18720b2eb52c3207132d1a80c";

export const getNowPlay = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then(res => {

            dispatch(fetchDataFulfilled(GET_NOW_PLAY, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const categoryFilter = (genres, movieGroup) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genres}`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_CATEGORY_FILTER, res.data.results, movieGroup))
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const comingSoon = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then(res => {

            dispatch(fetchDataFulfilled(res.data.results, GET_COMING_SOON));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const bestActors = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}
