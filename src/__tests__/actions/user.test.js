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
    const mockedPayload = { login: 'test' }
    const expectedAction = {
      type: SEARCH_USER_REQUEST,
      payload: mockedPayload
    }
    expect(searchUserRequest(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to search user success', () => {
    const mockedPayload = { list: ['user'] }
    const expectedAction = {
      type: SEARCH_USER_SUCCESS,
      payload: mockedPayload
    }
    expect(searchUserSuccess(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to search user failure', () => {
    const mockedPayload = { error: 'error' }
    const expectedAction = {
      type: SEARCH_USER_FAILURE,
      payload: mockedPayload
    }
    expect(searchUserFailure(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to get user request', () => {
    const mockedPayload = { login: 'test' }
    const expectedAction = {
      type: GET_USER_REQUEST,
      payload: mockedPayload
    }
    expect(getUserRequest(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to get user success', () => {
    const mockedPayload = { login: 'test' }
    const expectedAction = {
      type: GET_USER_SUCCESS,
      payload: mockedPayload
    }
    expect(getUserSuccess(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to get user failure', () => {
    const mockedPayload = { error: 'test' }
    const expectedAction = {
      type: GET_USER_FAILURE,
      payload: mockedPayload
    }
    expect(getUserFailure(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to get user repositories request', () => {
    const login = 'loginTest';
    const avatarUrl = 'avatarTest';
    const page = 1;
    const mockedPayload = { login, avatarUrl, page }
    const expectedAction = {
      type: GET_USER_REPOSITORIES_REQUEST,
      payload: mockedPayload
    }
    expect(getUserRepositoriesRequest(login, avatarUrl, page)).toEqual(expectedAction);
  });

  it('should create an action to get user repositories success', () => {
    const mockedPayload = { list: ['test'] }
    const expectedAction = {
      type: GET_USER_REPOSITORIES_SUCCESS,
      payload: mockedPayload
    }
    expect(getUserRepositoriesSuccess(mockedPayload)).toEqual(expectedAction);
  });

  it('should create an action to get user repositories failure', () => {
    const mockedPayload = { error: 'test' }
    const expectedAction = {
      type: GET_USER_REPOSITORIES_FAILURE,
      payload: mockedPayload
    }
    expect(getUserRepositoriesFailure(mockedPayload)).toEqual(expectedAction);
  });
})