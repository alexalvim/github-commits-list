import { takeLatest } from 'redux-saga/effects';

import { SEARCH_USER_REQUEST } from '../actions/actionTypes';
import { asyncSearchUser } from './user';

export default function* root() {
  yield takeLatest(SEARCH_USER_REQUEST, asyncSearchUser);
}