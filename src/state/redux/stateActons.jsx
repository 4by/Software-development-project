import { ADD_AREA, SET_CURS, SET_LIST, REM_AREA, SET_TEXT, GET_API_TO_ASYNC, GET_API_FROM_ASYNC, SET_ACCUR } from './stateConsts';

export const setAccurAction = (number) => ({ type: SET_ACCUR, ...number });
export const addAreaAction = () => ({ type: ADD_AREA });
export const setCursAction = (number) => ({ type: SET_CURS, ...number });
export const setTextAction = (number) => ({ type: SET_TEXT, ...number });
export const setListAction = (number) => ({ type: SET_LIST, ...number  });
export const remAreaAction = (number) => ({ type: REM_AREA, ...number });
export const getAPItoAsyncAction = () => ({ type: GET_API_TO_ASYNC });
export const getAPIfromAsyncAction = (number) => ({ type: GET_API_FROM_ASYNC, ...number });
