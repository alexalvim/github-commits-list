import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  USER_REPOSITORIES_REQUEST,
  USER_REPOSITORIES_SUCCESS,
  USER_REPOSITORIES_FAILURE
} from '../actions/actionTypes';

const initialState = {
  searchedUsers: [],
  login: '',
  avatarUrl: '',
  repositories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        searchedUsers: action.payload.items ? action.payload.items.slice(0, 5) : [],
      }
    case USER_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload
      }
    case USER_REPOSITORIES_REQUEST:
      return {
        ...state,
        login: action.payload.login,
        avatarUrl: action.payload.avatarUrl
      }
    case USER_REPOSITORIES_FAILURE:
    case SEARCH_USER_REQUEST:
    case SEARCH_USER_FAILURE:
    default:
      return state;
  }
};