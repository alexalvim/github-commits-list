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
    const mockedPayload = { login, repository, page }
    const expectedAction = {
      type: GET_REPOSITORY_COMMITS_REQUEST,
      payload: mockedPayload
    }
    expect(getRepositoryCommitsRequest(login, repository, page)).toEqual(expectedAction);
  });

  it('should create an action to get repository commits success', () => {
    const mockedPayload = { list: ['commits'] }
    const expectedAction = {
      type: GET_REPOSITORY_COMMITS_SUCCESS,
      payload: mockedPayload
    }
    expect(getRepositoryCommitsSuccess(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to get repository commits failure', () => {
    const mockedPayload = { error: 'error' }
    const expectedAction = {
      type: GET_REPOSITORY_COMMITS_FAILURE,
      payload: mockedPayload
    }
    expect(getRepositoryCommitsFailure(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to search commit request', () => {
    const login = 'loginTest'
    const repository = 'repositoryTest';
    const term = 'termTest';
    const mockedPayload = { login, repository, term }
    const expectedAction = {
      type: SEARCH_COMMIT_REQUEST,
      payload: mockedPayload
    }
    expect(searchCommitRequest(login, repository, term)).toEqual(expectedAction);
  });

  it('should create an action to search commit success', () => {
    const mockedPayload = { list: [] }
    const expectedAction = {
      type: SEARCH_COMMIT_SUCCESS,
      payload: mockedPayload
    }
    expect(searchCommitSuccess(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to search commit failure', () => {
    const mockedPayload = { error: 'error' }
    const expectedAction = {
      type: SEARCH_COMMIT_FAILURE,
      payload: mockedPayload
    }
    expect(searchCommitFailure(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to clear repository', () => {
    const expectedAction = {
      type: CLEAR_REPOSITORY
    }
    expect(clearRepository()).toEqual(expectedAction);
  });
})