import { addAreaAction, setCursAction, setAccurAction, setListVisibAction, remAreaAction, setTextAction, getAPItoAsyncAction } from './stateActons';

export const sharedProps = (state) => (
  {
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
    setListVisib: number => dispatch(setListVisibAction(number)),
    addArea: number => dispatch(addAreaAction(number)),
    remArea: number => dispatch(remAreaAction(number)),
    getAPItoAsync: () => dispatch(getAPItoAsyncAction()),
  }
);
