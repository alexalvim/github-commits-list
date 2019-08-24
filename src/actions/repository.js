import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE
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

export {
  getRepositoryCommitsRequest,
  getRepositoryCommitsSuccess,
  getRepositoryCommitsFailure
}