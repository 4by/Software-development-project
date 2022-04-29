import {initState, NEW_AREA, ADD_AREA, SET_CURS, SET_LIST_VISIB, REM_AREA, SET_TEXT, GET_API_FROM_ASYNC, SET_ACCUR } from './stateConsts';


export default (state = initState, action) => {


  const changeArea = arg => {
    const currentArea = state.areas[action.index]
    const newValue = { ...currentArea, ...arg }
    state.areas = state.areas.map((e, i) => i == action.index ? newValue : e)
  }


  if (action.type === SET_CURS) changeArea({ curs: action.code })
  else if (action.type === SET_TEXT) changeArea({ text: action.code })
  else if (action.type === SET_LIST_VISIB) changeArea({ listVisible: action.code })
  else if (action.type === SET_ACCUR) state.accur = action.code;
  else if (action.type === ADD_AREA)
    state.areas = [...state.areas, { ...NEW_AREA }];
  else if (action.type === REM_AREA)
    state.areas = state.areas.filter((e, i) => i !== action.index)
  // ({ [action.areas]: action.areas, ...state.areas } = state.areas);
  else if (action.type === GET_API_FROM_ASYNC)
    state.curses = { ...state.curses, ...action.cursesAPI };

  return { ...state };
};
