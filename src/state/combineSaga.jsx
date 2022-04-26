import { all } from 'redux-saga/effects';
import { userWatcher } from './redux/stateSaga';

// eslint-disable-next-line import/prefer-default-export
export function* rootWatcher() {
  yield all([userWatcher()]);
}
