import {
    GET_MOVIE,
    GET_MOVIE_DETAILS,
    GET_MOVIE_VIDEO,
    GET_BEST_MOVIES,
    GET_ALL_MOVIES,

} from '../actions/movieActions/types';
import {
    GET_DATA,
    GET_DATA_REJECTED,
    GET_NOW_PLAY,
    UPDATE_STATE
} from '../actions/otherActions/types';
import {

    GET_CASTING_CREW,
    GET_COMING_SOON,
    GET_BEST_ACTORS

} from '../actions/otherActions/types';

import Home from '../../photos&icons/headerBackgrounds/Home.jpg'
import BestMovies from '../../photos&icons/headerBackgrounds/BestMovies.jpeg'
import BestSeries from '../../photos&icons/headerBackgrounds/BestSeries.jpg';
import ComingSoon from '../../photos&icons/headerBackgrounds/ComingSoon.jpg';
import movie_master from '../../photos&icons/logos/movie_master.png';
import movie_film from '../../photos&icons/logos/movie_film.png';
import movie_club from '../../photos&icons/logos/movie_club.png';
import device from '../../photos&icons/logos/device.png';
import search from '../../photos&icons/logos/search.png';
import camera_roll from '../../photos&icons/logos/camera_roll.png';
import mmSeries from '../../photos&icons/logos/MMseries.png'
import comingSoon from '../../photos&icons/logos/comingSoon.png'




const SHOW_MORE = 'SHOW_MORE'
const SHOW_LESS = 'SHOW_LESS'
const GET_CATEGORY_FILTER = 'GET_CATEGORY_FILTER'


const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                loading: action.payload.loading
            };
        case GET_DATA_REJECTED:
            return {
                ...state,
                errorMessage: action.payload,
                loading: action.loading
            };
        case SHOW_MORE:
            return {
                ...state,
                loading: action.payload.loading,
                moviesToDisplay: action.payload.data
            };
        case SHOW_LESS:
            return {
                ...state,
                loading: action.payload.loading,
                moviesToDisplay: action.payload.data
            };


        case GET_NOW_PLAY:
            return {
                ...state,
                movies: action.payload.data,
                loading: action.payload.loading,
                categories: state.categories,
                moviesToShow: state.moviesToShow,
                headerTitle: state.headerTitles[0],
                cardCompTitle: state.cardCompTitles[0],
                pageBackground: state.pageBackgrounds[0],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[1],
                jumbotronLogo: state.logos[2]
            };

        case GET_BEST_MOVIES:
            return {
                ...state,
                movies: action.payload.data,
                categories: state.categories,
                loading: action.payload.loading,
                headerTitle: state.headerTitles[1],
                cardCompTitle: state.cardCompTitles[1],
                pageBackground: state.pageBackgrounds[1],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[5],
                jumbotronLogo: state.logos[2]
            };



        case GET_COMING_SOON:
            return {
                ...state,
                movies: action.payload.data,
                categories: state.categories,
                loading: action.payload.loading,
                headerTitle: state.headerTitles[3],
                cardCompTitle: state.cardCompTitles[3],
                pageBackground: state.pageBackgrounds[3],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[7],
                jumbotronLogo: state.logos[2]
            };
        case GET_CATEGORY_FILTER:

            return {
                ...state,
                loading: action.payload.loading,
                movies: action.payload.data,
                searched: action.payload.searched,
                categories: state.categories,
                cardCompTitle: action.payload.name,
                categories: state.categories,

            };

        case GET_MOVIE:
            return {
                ...state,
                movies: action.payload.data,
                cardCompTitle: action.payload.name,
                searched: action.payload.searched,
                loading: action.payload.loading,
            };
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                details: action.payload.data,
                loading: action.payload.loading,
            };

        case GET_MOVIE_VIDEO:
            return {};
        case GET_ALL_MOVIES:
            return {};
        default:
            return {
                ...state,
                categories: state.categories,
                loading: action.loading,
                searched: action.searched,
                moviesToShow: state.moviesToShow,
                headerTitle: state.headerTitles[0],
                cardCompTitle: state.cardCompTitles[0],
                pageBackground: state.pageBackgrounds[0],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[1],
                jumbotronLogo: state.logos[2]
            };
    }
}

export default movieReducer;