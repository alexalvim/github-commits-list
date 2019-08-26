import repositoryReducer, { initialState } from '../../reducers/repository';
import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE,
  SEARCH_COMMIT_REQUEST,
  SEARCH_COMMIT_SUCCESS,
  SEARCH_COMMIT_FAILURE,
  CLEAR_REPOSITORY,
  CLEAR_ERROR_MESSAGE
} from '../../actions/actionTypes' 

describe('Testing Repository reducer', () => {
  it('should return initial state', () => {
    expect(repositoryReducer(undefined, { type:'foo' })).toEqual(initialState);
  });

  it('should handle GET_REPOSITORY_COMMITS_REQUEST in the first page', () => {
    const payload ={
      repository: 'foo',
      page: 1
    }
    const expectedValue = {
      ...initialState,
      isLoadingCommits: true,
      name: payload.repository,
      commitsPage: payload.page
    };

    expect(
      repositoryReducer(undefined, { type: GET_REPOSITORY_COMMITS_REQUEST, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_REPOSITORY_COMMITS_REQUEST in other pages', () => {
    const payload = {
      repository: 'foo',
      page: 2
    }
    const expectedValue = {
      ...initialState,
      isLoadingCommits: false,
      name: payload.repository,
      commitsPage: payload.page
    };

    expect(
      repositoryReducer(undefined, { type: GET_REPOSITORY_COMMITS_REQUEST, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_REPOSITORY_COMMITS_SUCCESS in first page and commits per page different', () => {
    const mockedState = {
      ...initialState,
      hasNextPage: true,
      commitsPage: 1,
      commits: [0]
    }
    const payload = [1]

    const expectedValue = {
      ...mockedState,
      hasNextPage: false,
      commits: payload,
      isLoadingCommits: false
    };

    expect(
      repositoryReducer(mockedState, { type: GET_REPOSITORY_COMMITS_SUCCESS, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_REPOSITORY_COMMITS_SUCCESS in different page and commits per page equal', () => {
    const mockedState = {
      ...initialState,
      hasNextPage: false,
      commitsPage: 2,
      commits: [0]
    }
    const payload = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const expectedValue = {
      ...mockedState,
      hasNextPage: true,
      commits: [...mockedState.commits, ...payload],
      isLoadingCommits: false
    };

    expect(
      repositoryReducer(mockedState, { type: GET_REPOSITORY_COMMITS_SUCCESS, payload }))
      .toEqual(expectedValue);
  });

  it('should handle GET_REPOSITORY_COMMITS_FAILURE in other pages', () => {
    const payload = 'erro'
    const expectedValue = {
      ...initialState,
      isLoadingCommits: false,
      errorMessage: payload
    };

    expect(
      repositoryReducer(undefined, { type: GET_REPOSITORY_COMMITS_FAILURE, payload }))
      .toEqual(expectedValue);
  });

  it('should handle SEARCH_COMMIT_REQUEST in other pages', () => {
    const expectedValue = {
      ...initialState,
      isLoadingCommits: true,
    };

    expect(
      repositoryReducer(undefined, { type: SEARCH_COMMIT_REQUEST }))
      .toEqual(expectedValue);
  });

  it('should handle SEARCH_COMMIT_SUCCESS in other pages', () => {
    const payload = {
      items: ['test']
    }
    const expectedValue = {
      ...initialState,
      commits: payload.items,
      isLoadingCommits: false,
      commitsPage: 1
    };

    expect(
      repositoryReducer(undefined, { type: SEARCH_COMMIT_SUCCESS, payload }))
      .toEqual(expectedValue);
  });

  it('should handle SEARCH_COMMIT_FAILURE in other pages', () => {
    const payload = 'erro'
    const expectedValue = {
      ...initialState,
      isLoadingCommits: false,
      errorMessage: payload
    };

    expect(
      repositoryReducer(undefined, { type: SEARCH_COMMIT_FAILURE, payload }))
      .toEqual(expectedValue);
  });

  it('should handle CLEAR_REPOSITORY', () => {
    const mockedState = {
      ...initialState,
      errorMessage: 'test'
    }
    const expectedValue = {
      ...mockedState,
      errorMessage: ''
    };

    expect(
      repositoryReducer(mockedState, { type: CLEAR_REPOSITORY }))
      .toEqual(expectedValue);
  });

  it('should handle CLEAR_ERROR_MESSAGE', () => {
    const mockedState = {
      ...initialState,
      errorMessage: 'test'
    }

    const expectedValue = initialState;

    expect(
      repositoryReducer(mockedState, { type: CLEAR_ERROR_MESSAGE }))
      .toEqual(expectedValue);
  });
})