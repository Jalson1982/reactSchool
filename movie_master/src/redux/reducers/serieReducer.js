import {

    GET_SERIE_DETAILS,
    GET_SERIES_VIDEO,
    GET_BEST_SERIES,
    GET_ALL_SERIES,

} from '../actions/seriesActions/types';
import {
    GET_DATA,
    GET_DATA_REJECTED,
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
    searched: false,
    loading: true,
    errorMessage: '',
    moviesToDisplay: 8,
    headerTitles: ['Amazing Movies, TV-shows, Series And More A Click Away', 'Best Movies of All Time', 'Dive in The World of Best Series', 'Be First to Ride The Wave of Upcoming '],
    cardCompTitles: ['Now Playing In Cinema', 'Best Movies Ever', 'Series World of Joy', 'Upcoming Movies and More'],
    logos: [movie_master, movie_film, movie_club, device, search, camera_roll, mmSeries, comingSoon],
    pageBackgrounds: [Home, BestMovies, BestSeries, ComingSoon]
};


const SHOW_MORE = 'SHOW_MORE'
const SHOW_LESS = 'SHOW_LESS'
const GET_CATEGORY_FILTER = 'GET_CATEGORY_FILTER'


const serieReducer = (state = initialState, action) => {
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
        case GET_BEST_SERIES:
            return {
                ...state,
                movies: action.payload.data,
                categories: state.categories,
                loading: action.payload.loading,
                headerTitle: state.headerTitles[2],
                cardCompTitle: state.cardCompTitles[2],
                pageBackground: state.pageBackgrounds[2],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[6],
                jumbotronLogo: state.logos[2]
            };
        case GET_SERIE_DETAILS:
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
        default:
            return state;
    }
}

export default serieReducer;