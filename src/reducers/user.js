import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from '../actions/actionTypes';

const initialState = {
  login: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
    case SEARCH_USER_REQUEST:
    default:
      return state;
  }
};