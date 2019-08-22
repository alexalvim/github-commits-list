import { SEARCH_USER_REQUEST } from '../actions/actionTypes';

const initialState = {
  login: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER_REQUEST:
      return state;
    default:
      return state;
  }
};