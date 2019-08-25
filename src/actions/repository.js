import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE,
  SEARCH_COMMIT_REQUEST,
  SEARCH_COMMIT_SUCCESS,
  SEARCH_COMMIT_FAILURE,
  CLEAR_REPOSITORY
} from '../actions/actionTypes' 


const getRepositoryCommitsRequest = (login, repository, page) => ({
  type: GET_REPOSITORY_COMMITS_REQUEST,
  payload: {
    login,
    repository,
    page
  }
});

const getRepositoryCommitsSuccess = (payload) => ({
  type: GET_REPOSITORY_COMMITS_SUCCESS,
  payload
});

const getRepositoryCommitsFailure = (payload) => ({
  type: GET_REPOSITORY_COMMITS_FAILURE,
  payload
});

const searchCommitRequest = (login, repository, commit) => ({
  type: SEARCH_COMMIT_REQUEST,
  payload: {
    login,
    repository,
    commit
  }
});

const searchCommitSuccess = (payload) => ({
  type: SEARCH_COMMIT_SUCCESS,
  payload
});

const searchCommitFailure = (payload) => ({
  type: SEARCH_COMMIT_FAILURE,
  payload
});

const clearRepository = () => ({
  type: CLEAR_REPOSITORY
});

export {
  getRepositoryCommitsRequest,
  getRepositoryCommitsSuccess,
  getRepositoryCommitsFailure,
  searchCommitRequest,
  searchCommitSuccess,
  searchCommitFailure,
  clearRepository
}