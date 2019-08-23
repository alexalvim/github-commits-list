import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  SELECT_USER
} from './actionTypes';

const searchUserRequest = (payload) => ({
  type: SEARCH_USER_REQUEST,
  payload
});

const searchUserSuccess = (payload) => ({
  type: SEARCH_USER_SUCCESS,
  payload
})

const searchUserFailure = () => ({
  type: SEARCH_USER_FAILURE
})

const selectUser = (login, avatarUrl) => ({
  type: SELECT_USER,
  payload: {
    login,
    avatarUrl
  }
})

export {
  searchUserRequest,
  searchUserSuccess,
  searchUserFailure,
  selectUser
}