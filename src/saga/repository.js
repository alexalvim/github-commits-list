import { call, put } from 'redux-saga/effects';

import {
  getRepositoryCommits
} from '../api/github';

import {
  getRepositoryCommitsSuccess,
  getRepositoryCommitsFailure
} from '../actions/repository'

function* asyncGetRepositoryCommits(action) {
  try {
    const response = yield call(
      getRepositoryCommits,
      action.payload.login,
      action.payload.repository,
      action.payload.page);
    yield put(getRepositoryCommitsSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getRepositoryCommitsFailure);
  }
}

export {
  asyncGetRepositoryCommits
}