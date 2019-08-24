import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
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


const getUserRequest = (payload) => ({
  type: GET_USER_REQUEST,
  payload
});

const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload
});

const getUserFailure = () => ({
  type: GET_USER_FAILURE
});

const userRepositoriesRequest = (login, avatarUrl, page) => ({
  type: USER_REPOSITORIES_REQUEST,
  payload: {
    login,
    avatarUrl,
    page
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
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  userRepositoriesRequest,
  userRepositoriesSuccess,
  userRepositoriesFailure
}