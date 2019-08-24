import { call, put } from 'redux-saga/effects';

import {
  searchUserSuccess,
  searchUserFailure,
  getUserSuccess,
  getUserFailure,
  getUserRepositoriesSuccess,
  getUserRepositoriesFailure
} from '../actions/user';
import {
  searchUser,
  getUser,
  getUserRepositories
} from '../api/github';

function* asyncSearchUser(action) {
  try {
    const response = yield call(searchUser, action.payload);
    yield put(searchUserSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(searchUserFailure);
  }
}

function* asyncGetUser(action) {
  try {
    const response = yield call(getUser, action.payload);
    yield put(getUserSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getUserFailure);
  }
}

function* asyncUserRepositories(action) {
  try {
    const response = yield call(getUserRepositories, action.payload.login, action.payload.page);
    yield put(getUserRepositoriesSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getUserRepositoriesFailure);
  }
}

export {
  asyncSearchUser,
  asyncGetUser,
  asyncUserRepositories
}