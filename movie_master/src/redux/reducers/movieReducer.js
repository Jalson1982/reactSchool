import {
    GET_CATEGORY_FILTER,
    GET_DATA,
    GET_DATA_REJECTED,
    GET_NOW_PLAY,
    GET_COMING_SOON,
    GET_ALL_MOVIES,
    GET_MOVIE,
    GET_MOVIE_DETAILS,
    GET_MOVIE_VIDEO,
    GET_BEST_MOVIES,
} from '../../constants';


import Home from '../../assets/headerBackgrounds/Home.jpg';
import arrow from '../../assets/logos/arrow.png';
import BestMovies from '../../assets/headerBackgrounds/BestMovies.jpeg';
import ComingSoon from '../../assets/headerBackgrounds/ComingSoon.jpg';
import movie_master from '../../assets/logos/movie_master.png';
import movie_film from '../../assets/logos/movie_film.png';
import movie_club from '../../assets/logos/movie_club.png';
import device from '../../assets/logos/device.png';
import camera_roll from '../../assets/logos/camera_roll.png';
//import ENV_data from '../newRedux/config'


const initialState = {
    movies: [],
    categories: [
        { number: 28, title: "Action" },
        { number: 12, title: "Adventure" },
        { number: 16, title: "Animation" },
        { number: 35, title: "Comedy" },
        { number: 80, title: "Crime" },
        { number: 99, title: "Documentary" },
        { number: 18, title: "Drama" },
        { number: 10751, title: "Family" },
        { number: 14, title: "Fantasy" },
        { number: 36, title: "History" },
        { number: 27, title: "Horror" },
        { number: 10402, title: "Music" },
        { number: 9648, title: "Mistery" },
        { number: 10749, title: "Romance" },
        { number: 878, title: "Science Fiction" },
        { number: 10770, title: "Tv Movie" },
        { number: 53, title: "Thriller" },
        { number: 10752, title: "War" },
        { number: 37, title: "Western" }
    ],
    details: {},
    videoKey: ' ',
    searched: false,
    loading: true,
    showModal: false,
    errorMessage: ''
};



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


        case GET_NOW_PLAY:
            return {
                ...state,
                movies: action.payload.data,
                loading: action.payload.loading,
                categories: state.categories,
                pageBackground: Home,
                navbarLogo: movie_master,
                arrow: arrow,
                cardLogo: movie_master,
                headerLogo: movie_film,
                jumbotronLogo: movie_club
            };

        case GET_BEST_MOVIES:
            return {
                ...state,
                movies: action.payload.data,
                loading: action.payload.loading,
                pageBackground: BestMovies,
                headerLogo: camera_roll
            };



        case GET_COMING_SOON:
            return {
                ...state,
                movies: action.payload.data,
                categories: state.categories,
                loading: action.payload.loading,
                pageBackground: ComingSoon,
                headerLogo: device
            };

        case GET_CATEGORY_FILTER:

            return {
                ...state,
                loading: action.payload.loading,
                movies: action.payload.data,
                searchAndCategoriesTitle: action.payload.name,
                searched: action.payload.searched

            };

        case GET_MOVIE:
            return {
                ...state,
                movies: action.payload.data,
                searchAndCategoriesTitle: action.payload.name,
                searched: action.payload.searched,
                loading: action.payload.loading,
            };
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                details: action.payload.data,
                videoKey: ' ',
                loading: action.payload.loading,
                showModal: action.payload.showModal
            };

        case GET_MOVIE_VIDEO:
            return {
                ...state,
                videoKey: action.payload.data
            };

        case GET_ALL_MOVIES:
            return {};
        default:
            return {
                ...state,
                categories: state.categories,
                loading: action.loading,
                searched: action.searched,
                pageBackground: Home,
                navbarLogo: movie_master,
                arrow: arrow,
                cardLogo: movie_master,
                headerLogo: movie_film,
                jumbotronLogo: movie_club
            };
    }
}

export default movieReducer;