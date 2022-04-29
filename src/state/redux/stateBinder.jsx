import { addAreaAction, setCursAction, setAccurAction, setListAction, remAreaAction, setTextAction, getAPItoAsyncAction } from './stateActons';

export const sharedProps = (state) => (
  {
    getAccurAreas: [...state.areaState.areas].map((e, i, arr) => {
      const newText = Number(e.text).toFixed(state.areaState.accur)
      arr[i] = { ...e, text: newText }
      return arr
    }),
    getAreas: state.areaState.areas,
    getCurses: state.areaState.curses,
    getAccur: state.areaState.accur,
  }
);

export const sharedMethods = (dispatch) => (
  {
    setAccur: number => dispatch(setAccurAction(number)),
    setCurs: number => dispatch(setCursAction(number)),
    setText: number => dispatch(setTextAction(number)),
    setList: number => dispatch(setListAction(number)),
    addArea: number => dispatch(addAreaAction(number)),
    remArea: number => dispatch(remAreaAction(number)),
    getAPItoAsync: () => dispatch(getAPItoAsyncAction()),
  }
);
