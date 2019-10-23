import {
  GET_MOVIE,

  GET_MOVIE_DETAILS,

  GET_MOVIE_VIDEO,

  GET_MOVIE_FILTER,

  GET_ALL_MOVIES,

} from "./otherTypes";
import axios from "axios";

const API_KEY = "43960ac18720b2eb52c3207132d1a80c";

const initialState = {
  movies: [],
  series: [],
  loading: true,
  errorMsg: '',

};



export default function getReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, loading: action.payload };
    case GET_MOVIE:
    case GET_MOVIE_DETAILS:
      return action.posts;
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
      return action.posts;
    default:
      return state;
  }
}



export const fetchData = (bool) => {

  return {
    type: GET_DATA,
    payload: bool,
  };
}

export const fetchDataFulfilled = (data) => {

  return {
    type: GET_NOW_PLAY,
    payload: data,
    loading: false,
  };
}

export const nowPlay = () => {
  return dispatch => {
    dispatch(fetchData(true));
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then(res => {
      dispatch(fetchDataFulfilled(res.data.results));
    }).catch(err => dispatch(fetchDataRejected(err)));
  }
}

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
