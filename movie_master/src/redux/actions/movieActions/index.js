import {
    GET_MOVIE,
    GET_MOVIE_DETAILS,
    GET_MOVIE_VIDEO,
    GET_MOVIE_FILTER,
    GET_ALL_MOVIES,
    GET_BEST_MOVIES

} from "./types";
import { fetchData, fetchDataFulfilled, fetchDataRejected } from '../checkFetchedDataActionCreator/index';
import axios from "axios";
const API_KEY = "43960ac18720b2eb52c3207132d1a80c";

export const movieFilter = (genres) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genres}`).then(res => {

            dispatch(fetchDataFulfilled(GET_BEST_MOVIES, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const getMovie = (name) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`
        https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_MOVIE, res.data.results));

        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const movieDetails = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_MOVIE_DETAILS, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const movieVideo = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(` https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_MOVIE_VIDEO, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

/*export const getAllMovies = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.all([castingCrew(id), movieDetails(id), video(id)])
            .then(axios.spread(function (acct, perms, video) {
                return [acct, perms, video, GET_ALL_MOVIES]
            }))
    }
}*/