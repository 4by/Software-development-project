import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import areaStateReducer from './redux/stateReducers';
import { rootWatcher } from './combineSaga';

const rootReducer = combineReducers(
  { areaState: areaStateReducer },
);

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);
