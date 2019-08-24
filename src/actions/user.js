import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  USER_REPOSITORIES_REQUEST,
  USER_REPOSITORIES_SUCCESS,
  USER_REPOSITORIES_FAILURE
} from './actionTypes';

const searchUserRequest = (payload) => ({
  type: SEARCH_USER_REQUEST,
  payload
});

const searchUserSuccess = (payload) => ({
  type: SEARCH_USER_SUCCESS,
  payload
});

const searchUserFailure = () => ({
  type: SEARCH_USER_FAILURE
});

const userRepositoriesRequest = (login, avatarUrl) => ({
  type: USER_REPOSITORIES_REQUEST,
  payload: {
    login,
    avatarUrl
  }
});

const userRepositoriesSuccess = (payload) => ({
  type: USER_REPOSITORIES_SUCCESS,
  payload
});

const userRepositoriesFailure = () => ({
  type: USER_REPOSITORIES_FAILURE
});

export {
  searchUserRequest,
  searchUserSuccess,
  searchUserFailure,
  userRepositoriesRequest,
  userRepositoriesSuccess,
  userRepositoriesFailure
}