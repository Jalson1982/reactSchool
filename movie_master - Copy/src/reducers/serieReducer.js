import {
    GET_SERIE,
    GET_SERIE_DETAILS,
    GET_SERIES_VIDEO,
    GET_SERIES_FILTER,
    GET_ALL_SERIES

} from '../actions/seriesTypes';


export default function serieReducer(state = [], action) {
    switch (action.type) {
        case GET_SERIE:
            return { ...state, moviesData: action.payload, loading: action.loading };
        case GET_SERIE_DETAILS:
            return [...state, action.payload];
        case GET_SERIES_VIDEO:
            return { ...state, moviesData: action.payload, loading: action.loading };
        case GET_SERIES_FILTER:
            return state.filter(post => post._id !== action.payload.id);
        case GET_ALL_SERIES:
            return action.posts;
        default:
            return state;
    }
}
