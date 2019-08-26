import { put } from 'redux-saga/effects';

import {
  GET_REPOSITORY_COMMITS_REQUEST,
  SEARCH_COMMIT_REQUEST
} from '../../actions/actionTypes';
import {
  asyncGetRepositoryCommits,
  asyncSearchCommit
} from '../../saga/repository';
import {
  getRepositoryCommitsSuccess,
  getRepositoryCommitsFailure,
  searchCommitSuccess,
  searchCommitFailure
} from '../../actions/repository';

describe('Test Repository Saga', () => {
  it('should success if get repository commits returns success', () => {
    const action = { type: GET_REPOSITORY_COMMITS_REQUEST, payload: 'test' };
    const mockedResult = { message: 'success' }
    const gen = asyncGetRepositoryCommits(action);
    gen.next();
  
    expect(gen.next(mockedResult).value).toEqual(put(getRepositoryCommitsSuccess(mockedResult)));
  });

  it('should failure if get repository commits returns error', () => {
    const action = { type: GET_REPOSITORY_COMMITS_REQUEST, payload: 'test' };
    const gen = asyncGetRepositoryCommits(action);
  
    gen.next();
    expect(gen.throw('error').value).toEqual(put(getRepositoryCommitsFailure('error')));
  });

  it('should success if search commit returns success', () => {
    const action = { type: SEARCH_COMMIT_REQUEST, payload: 'test' };
    const mockedResult = { message: 'success' }
    const gen = asyncSearchCommit(action);
    gen.next();
  
    expect(gen.next(mockedResult).value).toEqual(put(searchCommitSuccess(mockedResult)));
  });

  it('should failure if search commit returns error', () => {
    const action = { type: SEARCH_COMMIT_REQUEST, payload: 'test' };
    const gen = asyncSearchCommit(action);
  
    gen.next();
    expect(gen.throw('error').value).toEqual(put(searchCommitFailure('error')));
  });
});