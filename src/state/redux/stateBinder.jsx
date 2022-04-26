import { addAreaAction, setCursAction, setListAction, remAreaAction, setTextAction, getAPItoAsyncAction } from './stateActons';

export const sharedProps = (state) => (
  {
    getAreas: state.areaState.areas,
    getCurses: state.areaState.curses,
  }
);

export const sharedMethods = (dispatch) => (
  {
    setCurs: number => dispatch(setCursAction(number)),
    setText: number => dispatch(setTextAction(number)),
    setList: number => dispatch(setListAction(number)),
    addArea: number => dispatch(addAreaAction(number)),
    remArea: number => dispatch(remAreaAction(number)),
    getAPItoAsync: () => dispatch(getAPItoAsyncAction()),
  }
);
