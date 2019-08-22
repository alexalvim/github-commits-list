import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from './actionTypes';

const searchUserRequest = (payload) => ({
  type: SEARCH_USER_REQUEST,
  payload
});

const searchUserSuccess = (payload) => ({
  type: SEARCH_USER_SUCCESS,
  payload
})

export {
  searchUserRequest,
  searchUserSuccess
}