import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE,
  CLEAR_REPOSITORY
} from '../actions/actionTypes' 

import { COMMITS_PER_PAGE } from '../api/github'

const initialState = {
  name: '',
  commits: [] ,
  commitsPage: 1,
  hasNextPage: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_REPOSITORY_COMMITS_REQUEST:
      return {
        ...state,
        commitsPage: action.payload.page,
        name: action.payload.repository
      };
    case GET_REPOSITORY_COMMITS_SUCCESS:
      const hasNextPage = COMMITS_PER_PAGE === action.payload.length;
      return {
        ...state,
        hasNextPage,
        commits: [...state.commits, ...action.payload]
      };
    case CLEAR_REPOSITORY:
      return initialState;
    case GET_REPOSITORY_COMMITS_FAILURE:
    default:
      return state;
  }
}