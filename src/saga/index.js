import { takeLatest } from 'redux-saga/effects';

import {
  SEARCH_USER_REQUEST,
  USER_REPOSITORIES_REQUEST
} from '../actions/actionTypes';
import { asyncSearchUser, asyncUserRepositories } from './user';

export default function* root() {
  yield takeLatest(SEARCH_USER_REQUEST, asyncSearchUser);
  yield takeLatest(USER_REPOSITORIES_REQUEST, asyncUserRepositories);
}