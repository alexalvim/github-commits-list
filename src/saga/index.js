import { takeLatest } from 'redux-saga/effects';

import {
  SEARCH_USER_REQUEST,
  GET_USER_REQUEST,
  GET_USER_REPOSITORIES_REQUEST,
  GET_REPOSITORY_COMMITS_REQUEST,
  SEARCH_COMMIT_REQUEST
} from '../actions/actionTypes';
import {
  asyncSearchUser,
  asyncGetUser,
  asyncGetUserRepositories
} from './user';
import {
  asyncGetRepositoryCommits,
  asyncSearchCommit
} from './repository'

export default function* root() {
  yield takeLatest(SEARCH_USER_REQUEST, asyncSearchUser);
  yield takeLatest(GET_USER_REQUEST, asyncGetUser);
  yield takeLatest(GET_USER_REPOSITORIES_REQUEST, asyncGetUserRepositories);
  yield takeLatest(GET_REPOSITORY_COMMITS_REQUEST, asyncGetRepositoryCommits);
  yield takeLatest(SEARCH_COMMIT_REQUEST, asyncSearchCommit);
}