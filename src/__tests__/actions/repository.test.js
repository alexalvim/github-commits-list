import {
  getRepositoryCommitsRequest,
  getRepositoryCommitsSuccess,
  getRepositoryCommitsFailure,
  searchCommitRequest,
  searchCommitSuccess,
  searchCommitFailure,
  clearRepository
} from '../../actions/repository';

import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE,
  SEARCH_COMMIT_REQUEST,
  SEARCH_COMMIT_SUCCESS,
  SEARCH_COMMIT_FAILURE,
  CLEAR_REPOSITORY
} from '../../actions/actionTypes';

describe('Repository actions', () => {
  it('should create an action to get repository commits request', () => {
    const login = 'loginTest'
    const repository = 'repositoryTest';
    const page = 1;
    const payload = { login, repository, page }
    const expectedAction = {
      type: GET_REPOSITORY_COMMITS_REQUEST,
      payload
    }
    expect(getRepositoryCommitsRequest(login, repository, page)).toEqual(expectedAction);
  });

  it('should create an action to get repository commits success', () => {
    const payload = { list: ['commits'] }
    const expectedAction = {
      type: GET_REPOSITORY_COMMITS_SUCCESS,
      payload
    }
    expect(getRepositoryCommitsSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to get repository commits failure', () => {
    const payload = { error: 'error' }
    const expectedAction = {
      type: GET_REPOSITORY_COMMITS_FAILURE,
      payload
    }
    expect(getRepositoryCommitsFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action to search commit request', () => {
    const login = 'loginTest'
    const repository = 'repositoryTest';
    const term = 'termTest';
    const payload = { login, repository, term }
    const expectedAction = {
      type: SEARCH_COMMIT_REQUEST,
      payload
    }
    expect(searchCommitRequest(login, repository, term)).toEqual(expectedAction);
  });

  it('should create an action to search commit success', () => {
    const payload = { list: [] }
    const expectedAction = {
      type: SEARCH_COMMIT_SUCCESS,
      payload
    }
    expect(searchCommitSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to search commit failure', () => {
    const payload = { error: 'error' }
    const expectedAction = {
      type: SEARCH_COMMIT_FAILURE,
      payload
    }
    expect(searchCommitFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action to clear repository', () => {
    const expectedAction = {
      type: CLEAR_REPOSITORY
    }
    expect(clearRepository()).toEqual(expectedAction);
  });
})