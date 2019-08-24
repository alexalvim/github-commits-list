import { combineReducers } from 'redux';

import userReducer from './user';
import repositoryReducer from './repository';

export const Reducers = combineReducers({
  userState: userReducer,
  repositoryState: repositoryReducer
});