import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import rootReducer from '../reducers/movieReducer';
//import your action creators used by dispatchers to alter your global state.
import {
    GET_DATA,
    GET_DATA_REJECTED,
    GET_NOW_PLAY,
    GET_COMING_SOON
} from '../actions/otherTypes';
import {
    GET_MOVIE,
    GET_MOVIE_DETAILS,
    GET_MOVIE_VIDEO,
    GET_BEST_MOVIES,
    GET_ALL_MOVIES,

} from '../actions/movieActions/types';
import axios from 'axios';
import { GET_BEST_SERIES } from '../actions/seriesTypes';


const API_KEY = "43960ac18720b2eb52c3207132d1a80c";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

const SHOW_MORE = 'SHOW_MORE'
const SHOW_LESS = 'SHOW_LESS'
const GET_CATEGORY_FILTER = 'GET_CATEGORY_FILTER'

export const showMoreHandler = (length) => {
    return dispatch => {
        dispatch(fetchData(true));
        dispatch(fetchDataFulfilled(length, SHOW_MORE))
    }

}
export const showLessHandler = (moviesToShow) => {
    return dispatch => {
        dispatch(fetchData(true));
        dispatch(fetchDataFulfilled(moviesToShow, SHOW_LESS))
    }

}

export const fetchData = (bool) => {

    return {
        type: GET_DATA,
        payload: bool,
    };
}

export const fetchDataFulfilled = (data, type, name) => {
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
    };
}


export const getNowPlay = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then(res => {

            dispatch(fetchDataFulfilled(res.data.results, GET_NOW_PLAY));
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

export const movieFilter = (genres) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genres}`).then(res => {
            console.log(genres)
            dispatch(fetchDataFulfilled(res.data.results, GET_BEST_MOVIES));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const categoryFilter = (genres, movieGroup) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genres}`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results, GET_CATEGORY_FILTER, movieGroup));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const seriesFilter = (genres) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genres}&include_null_first_air_dates=false`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results, GET_BEST_SERIES));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const getMovie = (name) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`
        https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results, GET_MOVIE, name));

        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}



export const movieDetails = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const serieDetails = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const castingCrew = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const video = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(` https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results));
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}

export const seriesVideo = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.get(` https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res => {
            console.log(res)
            dispatch(fetchDataFulfilled(res.data.results));
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

export const getAllMovies = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.all([castingCrew(id), movieDetails(id), video(id)])
            .then(axios.spread(function (acct, perms, video) {
                return [acct, perms, video]
            }))
    }
}

export const getAllSeries = (id) => {
    return dispatch => {
        dispatch(fetchData(true));
        axios.all([castingCrew(id), serieDetails(id), seriesVideo(id)])
            .then(axios.spread(function (acct, perms, video) {
                return [acct, perms, video]
            }))
    }
}

