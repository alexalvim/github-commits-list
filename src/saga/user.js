import { call, put } from 'redux-saga/effects';

import { searchUserSuccess, searchUserFailure } from '../actions/user';
import { searchUser } from '../api/github';

function* asyncSearchUser(action) {
  try {
    const response = yield call(searchUser, action.payload);
    yield put(searchUserSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(searchUserFailure);
  }
}

export {
  asyncSearchUser
}