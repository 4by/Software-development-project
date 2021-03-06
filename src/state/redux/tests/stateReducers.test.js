import reducer from '../stateReducers';
import { initState }from '../stateConsts' 
import * as actions from "../stateActons"


const addArea = actions.addAreaAction()
const remArea = (index) => actions.remAreaAction({ index })
const setText = (code, index) => actions.setTextAction({ code, index })
const setCurs = (code, index) => actions.setCursAction({ code, index })
const setListVisib = (code, index) => actions.setListVisibAction({ code, index })
const getAPI = (cursesAPI) => actions.getAPIfromAsyncAction({ cursesAPI })

describe('add area', () => {

    let state = { ...initState }

    beforeAll(() => {
        state = { ...initState }
        reducer(state, addArea)
        reducer(state, addArea)
    })

    test('number of areas', () => {
        expect(state.areas.length).toBe(3)
    })

    test('last area is init', () => {
        const initArea = state.areas[0]
        expect(state.areas.pop()).toEqual(initArea)
    })

})

describe('rem areas', () => {

    let state = { ...initState }
    let index = 0

    beforeAll(() => {
        reducer(state, addArea)
        reducer(state, addArea)
    })

    test('remove third', () => {
        reducer(state, remArea(index))
        expect(state.areas.length).toBe(2)
    })

    test('remove second', () => {
        reducer(state, remArea(index))
        expect(state).toEqual(initState)
    })

})

describe('set text', () => {

    let state = { ...initState }
    let codeText = "example"
    let codeUndef = undefined
    let index = 0

    test('text', () => {
        reducer(state, setText(codeText, index))
        expect(state.areas[index].text).toBe(codeText)
    })

    test('undefined', () => {
        reducer(state, setText(codeUndef, index))
        expect(state.areas[index].text).toBe(codeUndef)
    })


})

describe('set curs', () => {

    let state = { ...initState }
    let codeText = "example"
    let codeUndef = undefined
    let index = 0

    test('text', () => {
        reducer(state, setCurs(codeText, index))
        expect(state.areas[index].curs).toBe(codeText)
    })

    test('undefined', () => {
        reducer(state, setText(codeUndef, index))
        expect(state.areas[index].text).toBe(codeUndef)
    })


})

describe('set list', () => {

    let state = { ...initState }
    let index = 0

    test('on', () => {
        reducer(state, setListVisib(true, index))
        expect(state.areas[index].listVisible).toBe(true)
    })




})

describe('get api', () => {

    let state = { ...initState }
    const cursesAPI = { RUB: 1, USD: 2, UAH: 3 }

    test('on', () => {
        reducer(state, getAPI(cursesAPI))
        expect(state.curses).toEqual(cursesAPI)
    })


})
