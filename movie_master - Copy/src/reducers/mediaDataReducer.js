import {
    GET_NOW_PLAY,
    GET_CASTING_CREW,
    GET_COMING_SOON,
    GET_BEST_ACTORS

} from '../actions/otherTypes';




export default function serieReducer(state = [], action) {
    switch (action.type) {
        case GET_CASTING_CREW:
            return { ...state, mediaData: action.payload, loading: action.loading };
        case GET_COMING_SOON:
            return { ...state, mediaData: action.payload, loading: action.loading };
        case GET_BEST_ACTORS:
            return { ...state, mediaData: action.payload, loading: action.loading };
        case GET_NOW_PLAY:
            return { ...state, mediaData: action.payload, loading: action.loading };

        default:
            return state;
    }
}
