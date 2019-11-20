import {
    GET_DATA,
    GET_DATA_REJECTED,

    GET_SERIE_DETAILS,
    GET_SERIE_VIDEO,
    GET_BEST_SERIES,
    GET_ALL_SERIES,
    GET_NOW_PLAY,
    GET_CATEGORY_FILTER,
    GET_CASTING_CREW,
    GET_COMING_SOON,
    GET_BEST_ACTORS,
    GET_ALL_MOVIES,
    GET_MOVIE,
    GET_MOVIE_DETAILS,
    GET_MOVIE_VIDEO,
    GET_BEST_MOVIES,
} from './alltypes'
import axios from 'axios';
import { generateApiHit } from './config';


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

export const getNowPlay = () => {

    return dispatch => {
        dispatch(fetchData(true));
        axios.get(generateApiHit('getNowPlay')).then(res => {
            dispatch(fetchDataFulfilled(GET_NOW_PLAY, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const comingSoon = () => {

    return dispatch => {
        dispatch(fetchData(true));
        axios.get(generateApiHit('comingSoon')).then(res => {
            dispatch(fetchDataFulfilled(GET_COMING_SOON, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const movieFilter = (genres) => {

    return dispatch => {
        let genre = genres.toString();
        dispatch(fetchData(true));
        axios.get(generateApiHit('movieFilter') + genre).then(res => {

            dispatch(fetchDataFulfilled(GET_BEST_MOVIES, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const categoryFilter = (genres, movieGroup) => {

    return dispatch => {
        let genre = genres.toString();
        window.scrollTo(0, 0);
        dispatch(fetchData(true));
        axios.get(generateApiHit('categoryFilter') + genre).then(res => {
            setTimeout(() => { dispatch(fetchDataFulfilled(GET_CATEGORY_FILTER, res.data.results, movieGroup)); }, 700);
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const seriesFilter = (genres) => {

    return dispatch => {
        let genre = genres.toString();
        dispatch(fetchData(true));
        axios.get(generateApiHit('seriesFilter') + genre).then(res => {
            dispatch(fetchDataFulfilled(GET_BEST_SERIES, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const getMovie = (name) => {

    return dispatch => {
        window.scroll(0, 0)
        dispatch(fetchData(true));
        axios.get(generateApiHit('getMovie', name)).then(res => {
            setTimeout(() => { dispatch(fetchDataFulfilled(GET_MOVIE, res.data.results, name)); }, 700);
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const movieDetails = (id) => {

    return dispatch => {
        dispatch(fetchData(true));
        axios.get(generateApiHit('movieDetails', id)).then(res => {
            dispatch(fetchDataFulfilled(GET_MOVIE_DETAILS, res.data));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const serieDetails = (id) => {

    return dispatch => {
        dispatch(fetchData(true));
        axios.get(generateApiHit('serieDetails', id)).then(res => {
            dispatch(fetchDataFulfilled(GET_SERIE_DETAILS, res.data));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const castingCrew = (id) => {

    return dispatch => {
        dispatch(fetchData(true));
        axios.get(generateApiHit('castingCrew', id)).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_CASTING_CREW, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const movieVideo = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(generateApiHit('movieVideo', id)).then(res => {
            dispatch(fetchDataFulfilled(GET_MOVIE_VIDEO, res.data.results[0].key));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const serieVideo = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        console.log(id)
        console.log(generateApiHit('serieVideo', id))
        axios.get(generateApiHit('serieVideo', id)).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_SERIE_VIDEO, res.data.results[0].key));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}



export const bestActors = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(generateApiHit('bestActors')).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(GET_BEST_ACTORS, res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const getAllMovies = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.all([castingCrew(id), movieDetails(id), movieVideo(id)])
            .then(axios.spread(function (acct, perms, video) {
                return [acct, perms, video]
            }))
    }
}

export const getAllSeries = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.all([castingCrew(id), serieDetails(id), serieVideo(id)])
            .then(axios.spread(function (acct, perms, video) {
                return [acct, perms, video]
            }))
    }
}


