import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REPOSITORIES_REQUEST,
  GET_USER_REPOSITORIES_SUCCESS,
  GET_USER_REPOSITORIES_FAILURE
} from '../actions/actionTypes';

const initialState = {
  searchedUsers: [],
  login: '',
  avatarUrl: '',
  repositories: [],
  repositoriesPage: 1,
  repositoriesCount: 0,
  loadingRepositories: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        searchedUsers: action.payload.items ? action.payload.items.slice(0, 5) : [],
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        repositoriesCount: action.payload.public_repos,
      };
    case GET_USER_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loadingRepositories: false,
        repositories: [...state.repositories, ...action.payload]
      };
    case GET_USER_REPOSITORIES_REQUEST:
      const repositories = action.payload.page === 1 ? [] : state.repositories;
      const loadingRepositories = action.payload.page === 1;
      return {
        ...state,
        repositories,
        loadingRepositories,
        login: action.payload.login,
        avatarUrl: action.payload.avatarUrl,
        repositoriesPage: action.payload.page
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        searchedUsers: []
      };
    case GET_USER_REPOSITORIES_FAILURE:
      return {
        ...state,
        loadingRepositories: false
      };
    case SEARCH_USER_REQUEST:
    case GET_USER_FAILURE:
    case SEARCH_USER_FAILURE:
    default:
      return state;
  }
};