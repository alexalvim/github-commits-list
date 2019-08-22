import { call, put } from 'redux-saga/effects';

import { SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE } from '../actions/actionTypes';
import { searchUser } from '../api/github';

function* asyncSearchUser(action) {
  try {
    const response = yield call(searchUser, action.payload);
    yield put({ type: SEARCH_USER_SUCCESS, payload: response });
  } catch (err) {
    console.log(err);
    yield put({ type: SEARCH_USER_FAILURE });
  }
}

export {
  asyncSearchUser
}