import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REPOSITORIES_REQUEST,
  GET_USER_REPOSITORIES_SUCCESS,
  GET_USER_REPOSITORIES_FAILURE,
} from './actionTypes';

const searchUserRequest = (payload) => ({
  type: SEARCH_USER_REQUEST,
  payload
});

const searchUserSuccess = (payload) => ({
  type: SEARCH_USER_SUCCESS,
  payload
});

const searchUserFailure = (payload) => ({
  type: SEARCH_USER_FAILURE,
  payload
});

const getUserRequest = (payload) => ({
  type: GET_USER_REQUEST,
  payload
});

const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload
});

const getUserFailure = (payload) => ({
  type: GET_USER_FAILURE,
  payload
});

const getUserRepositoriesRequest = (login, avatarUrl, page) => ({
  type: GET_USER_REPOSITORIES_REQUEST,
  payload: {
    login,
    avatarUrl,
    page
  }
});

const getUserRepositoriesSuccess = (payload) => ({
  type: GET_USER_REPOSITORIES_SUCCESS,
  payload
});

const getUserRepositoriesFailure = (payload) => ({
  type: GET_USER_REPOSITORIES_FAILURE,
  payload
});

export {
  searchUserRequest,
  searchUserSuccess,
  searchUserFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getUserRepositoriesRequest,
  getUserRepositoriesSuccess,
  getUserRepositoriesFailure,
}