import userReducer, { initialState } from '../../reducers/user';
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
  CLEAR_ERROR_MESSAGE
} from '../../actions/actionTypes';

describe('Testing User reducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, { type:'foo' })).toEqual(initialState);
  });

  it('should handle SEARCH_USER_REQUEST', () => {
    const expectedValue = {
      ...initialState,
      searchedUsers: []
    };

    expect(
      userReducer(undefined, { type: SEARCH_USER_REQUEST }))
      .toEqual(expectedValue);
  });

  it('should handle SEARCH_USER_SUCCESS', () => {
    const payload = {
      items: ['user']
    }
    const expectedValue = {
      ...initialState,
      searchedUsers: payload.items
    };

    expect(
      userReducer(undefined, { type: SEARCH_USER_SUCCESS, payload }))
      .toEqual(expectedValue);
  });

  it('should handle SEARCH_USER_FAILURE', () => {
    const payload = 'error'
    const expectedValue = {
      ...initialState,
      errorMessage: payload
    };

    expect(
      userReducer(undefined, { type: SEARCH_USER_FAILURE, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_USER_REQUEST', () => {
    const expectedValue = {
      ...initialState,
      searchedUsers: []
    };

    expect(
      userReducer(undefined, { type: GET_USER_REQUEST }))
      .toEqual(expectedValue);
  });

  it('should handle GET_USER_SUCCESS', () => {
    const payload = {
      public_repos: 10
    }
    const expectedValue = {
      ...initialState,
      repositoriesCount: payload.public_repos
    };

    expect(
      userReducer(undefined, { type: GET_USER_SUCCESS, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_USER_FAILURE', () => {
    const payload = 'error'
    const expectedValue = {
      ...initialState,
      errorMessage: payload
    };

    expect(
      userReducer(undefined, { type: GET_USER_FAILURE, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_USER_REPOSITORIES_REQUEST in first page', () => {
    const payload = {
      login: 'login',
      avatarUrl: 'avatarUrl',
      page: 1
    };
    const expectedValue = {
      ...initialState,
      repositories: [],
      loadingRepositories: true,
      login: payload.login,
      avatarUrl: payload.avatarUrl,
      repositoriesPage: payload.page
    };

    expect(
      userReducer(undefined, { type: GET_USER_REPOSITORIES_REQUEST, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_USER_REPOSITORIES_REQUEST in other pages', () => {
    const payload = {
      login: 'login',
      avatarUrl: 'avatarUrl',
      page: 2
    };
    const mockedState = {
      ...initialState,
      repositories: ['bla']
    }
    const expectedValue = {
      ...initialState,
      repositories: ['bla'],
      loadingRepositories: false,
      login: payload.login,
      avatarUrl: payload.avatarUrl,
      repositoriesPage: payload.page
    };

    expect(
      userReducer(mockedState, { type: GET_USER_REPOSITORIES_REQUEST, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_USER_REPOSITORIES_SUCCESS', () => {
    const payload = ['test'];
    const mockedState = {
      ...initialState,
      repositories: ['foo']
    }
    const expectedValue = {
      ...initialState,
      loadingRepositories: false,
      repositories: ['foo', 'test']
    };

    expect(
      userReducer(mockedState, { type: GET_USER_REPOSITORIES_SUCCESS, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_USER_REPOSITORIES_FAILURE', () => {
    const payload = 'error'
    const expectedValue = {
      ...initialState,
      loadingRepositories: false,
      errorMessage: payload
    };

    expect(
      userReducer(undefined, { type: GET_USER_REPOSITORIES_FAILURE, payload }))
      .toEqual(expectedValue);
  });

  it('should handle CLEAR_ERROR_MESSAGE', () => {
    const mockedState = {
      ...initialState,
      errorMessage: 'test'
    }
    const expectedValue = {
      ...mockedState,
      errorMessage: ''
    };

    expect(
      userReducer(mockedState, { type: CLEAR_ERROR_MESSAGE }))
      .toEqual(expectedValue);
  });
});