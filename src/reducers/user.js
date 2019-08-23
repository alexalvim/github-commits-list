import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  SELECT_USER
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
        searchedUsers: action.payload.items.slice(0, 5),
      }
    case SELECT_USER:
      return {
        ...state,
        login: action.payload.login,
        avatarUrl: action.payload.avatarUrl
      }
    case SEARCH_USER_REQUEST:
    case SEARCH_USER_FAILURE:
    default:
      return state;
  }
};