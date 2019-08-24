import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE,
  CLEAR_REPOSITORY
} from '../actions/actionTypes' 


const getRepositoryCommitsRequest = (login, repository) => ({
  type: GET_REPOSITORY_COMMITS_REQUEST,
  payload: {
    login,
    repository
  }
});

const getRepositoryCommitsSuccess = (payload) => ({
  type: GET_REPOSITORY_COMMITS_SUCCESS,
  payload
});

const getRepositoryCommitsFailure = () => ({
  type: GET_REPOSITORY_COMMITS_FAILURE
});

const clearRepository = () => ({
  type: CLEAR_REPOSITORY
});

export {
  getRepositoryCommitsRequest,
  getRepositoryCommitsSuccess,
  getRepositoryCommitsFailure,
  clearRepository
}