import { call, put } from 'redux-saga/effects';

import {
  getRepositoryCommits,
  searchCommit
} from '../api/github';

import {
  getRepositoryCommitsSuccess,
  getRepositoryCommitsFailure,
  searchCommitSuccess,
  searchCommitFailure
} from '../actions/repository'

function* asyncGetRepositoryCommits(action) {
  try {
    const response = yield call(
      getRepositoryCommits,
      action.payload.login,
      action.payload.repository,
      action.payload.page
    );
    yield put(getRepositoryCommitsSuccess(response));
  } catch (err) {
    yield put(getRepositoryCommitsFailure(err));
  }
}

function* asyncSearchCommit(action) {
  try {
    const response = yield call(
      searchCommit,
      action.payload.login,
      action.payload.repository,
      action.payload.term
    );
    yield put(searchCommitSuccess(response));
  } catch (err) {
    yield put(searchCommitFailure(err));
  }
}

export {
  asyncGetRepositoryCommits,
  asyncSearchCommit
}