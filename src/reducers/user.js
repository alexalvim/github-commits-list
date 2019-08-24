import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  USER_REPOSITORIES_REQUEST,
  USER_REPOSITORIES_SUCCESS,
  USER_REPOSITORIES_FAILURE
} from '../actions/actionTypes';

const initialState = {
  searchedUsers: [],
  login: '',
  avatarUrl: '',
  repositories: [],
  repositoriesPage: 1,
  repositoriesCount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        searchedUsers: action.payload.items ? action.payload.items.slice(0, 5) : [],
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        repositoriesCount: action.payload.public_repos,
      }
    case USER_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: [...state.repositories, ...action.payload]
      }
    case USER_REPOSITORIES_REQUEST:
      const repositories = action.payload.page === 1 ? [] : state.repositories;
      return {
        ...state,
        repositories,
        login: action.payload.login,
        avatarUrl: action.payload.avatarUrl,
        repositoriesPage: action.payload.page
      }
    case GET_USER_REQUEST:
      return {
        ...state,
        searchedUsers: []
      } 
    case SEARCH_USER_REQUEST:
    case GET_USER_FAILURE:
    case USER_REPOSITORIES_FAILURE:
    case SEARCH_USER_FAILURE:
    default:
      return state;
  }
};