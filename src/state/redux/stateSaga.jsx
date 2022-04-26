import { put, takeEvery, call } from 'redux-saga/effects';
import { API_LINK, GET_API_TO_ASYNC } from './stateConsts';
import { getAPIfromAsyncAction } from './stateActons';


export const getPromise = () => fetch(API_LINK)

export const getAnswer = (arg) => new Promise(res => res(arg.json()))

// вот это идет в варианты выпадающего списка. сделать его информативнее (но валуе оставить)
export const cursesAPI = (json) =>
  Object.fromEntries(
    Object.entries(json.Valute)
      .map(e => [e[0], e[1].Value]),
  );


export function* userWatcher() {
  yield takeEvery(GET_API_TO_ASYNC, fetchUserWorker);
}

export function* fetchUserWorker() {
  const data = yield call(getPromise);
  const json = yield call(getAnswer, data);
  // console.log((({ RUB, EUR }) => ({ RUB, EUR }))(json.Valute));
  yield put(getAPIfromAsyncAction({ cursesAPI: cursesAPI(json) }));
}
