import { put } from 'redux-saga/effects';

import {
  GET_USER_REQUEST,
  SEARCH_USER_REQUEST,
  GET_USER_REPOSITORIES_REQUEST
} from '../../actions/actionTypes';
import {
  asyncGetUser,
  asyncSearchUser,
  asyncGetUserRepositories
} from '../../saga/user';
import {
  getUserSuccess,
  getUserFailure,
  searchUserSuccess,
  searchUserFailure,
  getUserRepositoriesSuccess,
  getUserRepositoriesFailure
} from '../../actions/user';

describe('Test User Saga', () => {
  it('should success if get user returns success', () => {
    const action = { type: GET_USER_REQUEST, payload: 'test' };
    const mockedResult = { message: 'success' }
    const gen = asyncGetUser(action);
    gen.next();
  
    expect(gen.next(mockedResult).value).toEqual(put(getUserSuccess(mockedResult)));
  });

  it('should failure if get user returns error', () => {
    const action = { type: GET_USER_REQUEST, payload: 'test' };
    const gen = asyncGetUser(action);
  
    gen.next();
    expect(gen.throw('error').value).toEqual(put(getUserFailure('error')));
  });

  it('should success if search user returns success', () => {
    const action = { type: SEARCH_USER_REQUEST, payload: 'test' };
    const mockedResult = { message: 'success' }
    const gen = asyncSearchUser(action);
    gen.next();
  
    expect(gen.next(mockedResult).value).toEqual(put(searchUserSuccess(mockedResult)));
  });

  it('should failure if search user returns error', () => {
    const action = { type: SEARCH_USER_REQUEST, payload: 'test' };
    const gen = asyncSearchUser(action);
  
    gen.next();
    expect(gen.throw('error').value).toEqual(put(searchUserFailure('error')));
  });

  it('should success if get user repositories returns success', () => {
    const action = { type: GET_USER_REPOSITORIES_REQUEST, payload: 'test' };
    const mockedResult = { message: 'success' }
    const gen = asyncGetUserRepositories(action);
    gen.next();
  
    expect(gen.next(mockedResult).value).toEqual(put(getUserRepositoriesSuccess(mockedResult)));
  });

  it('should failure if get user repositories returns error', () => {
    const action = { type: GET_USER_REPOSITORIES_REQUEST, payload: 'test' };
    const gen = asyncGetUserRepositories(action);
  
    gen.next();
    expect(gen.throw('error').value).toEqual(put(getUserRepositoriesFailure('error')));
  });
});