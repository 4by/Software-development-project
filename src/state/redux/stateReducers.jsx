import { NEW_AREA, ADD_AREA, SET_CURS, SET_LIST, REM_AREA, SET_TEXT, GET_API_FROM_ASYNC, SET_ACCUR } from './stateConsts';

export const initValue = { curses: { RUB: 1 }, areas: [NEW_AREA], accur: 2 };

export default (state = initValue, action) => {



  const changeIt = arg => {
    const currentArea = state.areas[action.index]
    const newValue = { ...currentArea, ...arg }
    state.areas = state.areas.map((e, i) => i == action.index ? newValue : e)
  }


  if (action.type === SET_CURS) changeIt({ curs: action.code })

  else if (action.type === SET_ACCUR) state.accur = action.accur;

  else if (action.type === SET_TEXT) changeIt({ text: action.code })
  else if (action.type === SET_LIST) changeIt({ listVisible: action.isVisible })
  else if (action.type === ADD_AREA)
    state.areas = [...state.areas, { ...NEW_AREA }];
  else if (action.type === REM_AREA)
    state.areas = state.areas.filter((e, i) => i !== action.index)
  // ({ [action.areas]: action.areas, ...state.areas } = state.areas);
  else if (action.type === GET_API_FROM_ASYNC)
    state.curses = { ...state.curses, ...action.cursesAPI };

  return { ...state };
};
