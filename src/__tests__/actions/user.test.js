import {
  searchUserRequest,
  searchUserSuccess,
  searchUserFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getUserRepositoriesRequest,
  getUserRepositoriesSuccess,
  getUserRepositoriesFailure,
} from '../../actions/user';

import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REPOSITORIES_REQUEST,
  GET_USER_REPOSITORIES_SUCCESS,
  GET_USER_REPOSITORIES_FAILURE,
} from '../../actions/actionTypes';

describe('User actions', () => {
  it('should create an action to search user request', () => {
    const payload = { login: 'test' }
    const expectedAction = {
      type: SEARCH_USER_REQUEST,
      payload
    }
    expect(searchUserRequest(payload)).toEqual(expectedAction);
  });

  it('should create an action to search user success', () => {
    const payload = { list: ['user'] }
    const expectedAction = {
      type: SEARCH_USER_SUCCESS,
      payload
    }
    expect(searchUserSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to search user failure', () => {
    const payload = { error: 'error' }
    const expectedAction = {
      type: SEARCH_USER_FAILURE,
      payload
    }
    expect(searchUserFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action to get user request', () => {
    const payload = { login: 'test' }
    const expectedAction = {
      type: GET_USER_REQUEST,
      payload
    }
    expect(getUserRequest(payload)).toEqual(expectedAction);
  });

  it('should create an action to get user success', () => {
    const payload = { login: 'test' }
    const expectedAction = {
      type: GET_USER_SUCCESS,
      payload
    }
    expect(getUserSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to get user failure', () => {
    const payload = { error: 'test' }
    const expectedAction = {
      type: GET_USER_FAILURE,
      payload
    }
    expect(getUserFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action to get user repositories request', () => {
    const login = 'loginTest';
    const avatarUrl = 'avatarTest';
    const page = 1;
    const payload = { login, avatarUrl, page }
    const expectedAction = {
      type: GET_USER_REPOSITORIES_REQUEST,
      payload
    }
    expect(getUserRepositoriesRequest(login, avatarUrl, page)).toEqual(expectedAction);
  });

  it('should create an action to get user repositories success', () => {
    const payload = { list: ['test'] }
    const expectedAction = {
      type: GET_USER_REPOSITORIES_SUCCESS,
      payload
    }
    expect(getUserRepositoriesSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to get user repositories failure', () => {
    const payload = { error: 'test' }
    const expectedAction = {
      type: GET_USER_REPOSITORIES_FAILURE,
      payload
    }
    expect(getUserRepositoriesFailure(payload)).toEqual(expectedAction);
  });
})