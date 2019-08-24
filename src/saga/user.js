import { call, put } from 'redux-saga/effects';

import {
  searchUserSuccess,
  searchUserFailure,
  userRepositoriesSuccess,
  userRepositoriesFailure
} from '../actions/user';
import { searchUser, getUserRepositories } from '../api/github';

function* asyncSearchUser(action) {
  try {
    const response = yield call(searchUser, action.payload);
    yield put(searchUserSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(searchUserFailure);
  }
}

function* asyncUserRepositories(action) {
  try {
    const response = yield call(getUserRepositories, action.payload.login);
    yield put(userRepositoriesSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(userRepositoriesFailure);
  }
}

export {
  asyncSearchUser,
  asyncUserRepositories
}