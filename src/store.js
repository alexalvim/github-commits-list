import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Reducers } from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);