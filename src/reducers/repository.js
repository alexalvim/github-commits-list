import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE,
  SEARCH_COMMIT_SUCCESS,
  SEARCH_COMMIT_FAILURE,
  CLEAR_REPOSITORY,
  CLEAR_ERROR_MESSAGE
} from '../actions/actionTypes' 

import { COMMITS_PER_PAGE } from '../api/github'

const initialState = {
  name: '',
  commits: [] ,
  commitsPage: 1,
  isLoadingCommits: false,
  hasNextPage: false,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_REPOSITORY_COMMITS_REQUEST:
      const isLoadingCommits = action.payload.page === 1;
      return {
        ...state,
        isLoadingCommits,
        commitsPage: action.payload.page,
        name: action.payload.repository
      };
    case GET_REPOSITORY_COMMITS_SUCCESS:
      const hasNextPage = COMMITS_PER_PAGE === action.payload.length;
      const commits = state.commitsPage === 1 ? action.payload : [...state.commits, ...action.payload];
      return {
        ...state,
        hasNextPage,
        commits,
        isLoadingCommits: false
      };
    case SEARCH_COMMIT_SUCCESS:
      return {
        ...state,
        commits: action.payload.items,
        commitsPage: 1
      };
    case GET_REPOSITORY_COMMITS_FAILURE:
      return {
        ...state,
        isLoadingCommits: false,
        errorMessage: action.payload
      }
    case SEARCH_COMMIT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: ''
      };
    case CLEAR_REPOSITORY:
      return initialState;
    default:
      return state;
  }
}