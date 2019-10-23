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
} from '../actions/otherTypes';
import {

    GET_CASTING_CREW,
    GET_COMING_SOON,
    GET_BEST_ACTORS

} from '../actions/otherTypes';
import { GET_BEST_SERIES } from '../actions/seriesTypes';
import Home from '../photos&icons/headerBackgrounds/Home.jpg'
import BestMovies from '../photos&icons/headerBackgrounds/BestMovies.jpeg'
import BestSeries from '../photos&icons/headerBackgrounds/BestSeries.jpg';
import ComingSoon from '../photos&icons/headerBackgrounds/ComingSoon.jpg';

import movie_master from '../photos&icons/logos/movie_master.png';
import movie_film from '../photos&icons/logos/movie_film.png';
import movie_club from '../photos&icons/logos/movie_club.png';
import device from '../photos&icons/logos/device.png';
import search from '../photos&icons/logos/search.png';
import camera_roll from '../photos&icons/logos/camera_roll.png';
import mmSeries from '../photos&icons/logos/MMseries.png'
import comingSoon from '../photos&icons/logos/comingSoon.png'

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
    genres: '',
    searched: false,
    loading: true,
    errorMessage: '',
    moviesToDisplay: 8,
    headerTitles: ['Amazing Movies, TV-shows, Series And More A Click Away', 'Best Movies of All Time', 'Dive in The World of Best Series', 'Be First to Ride The Wave of Upcoming '],
    cardCompTitles: ['Now Playing In Cinema', 'Best Movies Ever', 'Series World of Joy', 'Upcoming Movies and More'],
    logos: [movie_master, movie_film, movie_club, device, search, camera_roll, mmSeries, comingSoon],
    pageBackgrounds: [Home, BestMovies, BestSeries, ComingSoon]
}

const SHOW_MORE = 'SHOW_MORE'
const SHOW_LESS = 'SHOW_LESS'
const GET_CATEGORY_FILTER = 'GET_MOVIE_FILTER'

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                loading: action.payload
            };
        case SHOW_MORE:
            return {
                ...state,
                loading: action.loading,
                moviesToDisplay: action.payload
            };
        case SHOW_LESS:
            return {
                ...state,
                loading: action.loading,
                moviesToDisplay: action.payload
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
                loading: action.loading,
                headerTitle: state.headerTitles[1],
                cardCompTitle: state.cardCompTitles[1],
                pageBackground: state.pageBackgrounds[1],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[5],
                jumbotronLogo: state.logos[2]
            };

        case GET_BEST_SERIES:
            return {
                ...state,
                movies: action.payload.data,
                categories: state.categories,
                loading: action.loading,
                headerTitle: state.headerTitles[2],
                cardCompTitle: state.cardCompTitles[2],
                pageBackground: state.pageBackgrounds[2],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[6],
                jumbotronLogo: state.logos[2]
            };

        case GET_COMING_SOON:
            return {
                ...state,
                movies: action.payload.data,
                categories: state.categories,
                loading: action.loading,
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
                movies: action.payload.data,
                categories: state.categories,
                loading: action.payload.loading,
                headerTitle: state.headerTitles[3],
                cardCompTitle: action.payload.name,
                pageBackground: state.pageBackgrounds[3],
                navbarLogo: state.logos[0],
                searchLogo: state.logos[4],
                cardLogo: state.logos[0],
                headerLogo: state.logos[7],
                jumbotronLogo: state.logos[2]
            };
        case GET_DATA_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading };
        case GET_MOVIE:
            return {
                ...state,
                movies: action.payload,
                cardCompTitle: action.name,
                searched: action.searched,
                loading: action.loading,
            };
        case GET_MOVIE_DETAILS:
            return action.posts;
        case GET_MOVIE_VIDEO:
            return action.posts;
        case GET_ALL_MOVIES:
            return action.posts;
        default:
            return state;
    }
}