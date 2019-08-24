import {
  GET_REPOSITORY_COMMITS_REQUEST,
  GET_REPOSITORY_COMMITS_SUCCESS,
  GET_REPOSITORY_COMMITS_FAILURE
} from '../actions/actionTypes' 

const initialState = {
  name: '',
  commits: [] 
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_REPOSITORY_COMMITS_REQUEST:
      return {
        ...state,
        name: action.payload.repository
      }
    case GET_REPOSITORY_COMMITS_SUCCESS:
      return {
        ...state,
        commits: action.payload
      }
    case GET_REPOSITORY_COMMITS_FAILURE:
    default:
      return state
  }
}