import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import serieReducer from './serieReducer';


export default combineReducers({

  movies: movieReducer,
  series: serieReducer,

});














{/*export const createPost = ({ title, body }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/add`, { title, body })
      .then(response => {
        dispatch(createPostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  };
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
};

export const deletePost = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchPosts = posts => {
  return {
    type: FETCH_POST,
    posts
  };
};

export const fetchAllPosts = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchPosts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};


 */}
{ /*case GET_MOVIE_DETAILS:
  return action.posts; 
  case GET_MOVIE:
  return { ...state, movies: action.payload, loading: action.loading };

case GET_SERIE_DETAILS:
  return [...state, action.payload];
case GET_CASTING_CREW:
  return state.filter(post => post._id !== action.payload.id);
case GET_MOVIE_VIDEO:
  return action.posts;
case GET_SERIES_VIDEO:
  return state.filter(post => post._id !== action.payload.id);
case GET_COMING_SOON:
  return action.posts;
case GET_MOVIE_FILTER:
  return [...state, action.payload];
case GET_SERIES_FILTER:
  return state.filter(post => post._id !== action.payload.id);
case GET_BEST_ACTORS:
  return action.posts;
case GET_ALL_MOVIES:
  return action.posts;
case GET_ALL_SERIES:
return action.posts;*/}