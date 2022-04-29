import { inputFilter, converte, converteActiveAreas, arrOfValuesToChange } from './';

const getCurses = { RUB: 1, USD: 2, UAH: 3 }
const getAreas = [
    { listVisible: false, text: 1, value: "USD" },
    { listVisible: false, text: 2, value: "RUB" },
    { listVisible: false, text: 2, value: undefined }
]


describe('filter func', () => {

    test('check valid', () => {
        expect(inputFilter("123")).toBe("valid")
    })

    test('check not finished', () => {
        expect(inputFilter("123e")).toBe("notFinished")
        expect(inputFilter("123e-")).toBe("notFinished")
        expect(inputFilter("123.")).toBe("notFinished")
    })

    test('check not valid', () => {
        expect(inputFilter("q")).toBe("notValid")
    })

    test('check valid but not possible', () => {
        expect(inputFilter("0000")).toBe("valid")
    })

})


describe('converte func', () => {

    const RubToRub = { value: 2, fromCurs: getCurses.RUB, toCurs: getCurses.RUB }
    const RubToUSD = { value: 2, fromCurs: getCurses.RUB, toCurs: getCurses.USD }

    test('to itself', () => {
        expect(converte(RubToRub)).toBe(2)
    })

    test('to other', () => {
        expect(converte(RubToUSD)).toBe(1)
    })

})


describe('converteActiveAreas func', () => {

    const argToFun = { value: "12", index: 1, getCurses, getAreas }
    const result = converteActiveAreas(argToFun)

    test('areas number', () => {
        expect(result.length).toBe(getAreas.length)
    })

    test('undefined number', () => {
        expect(result.filter(e => e == undefined).length).toBe(getAreas.filter(e => e.curs == undefined).length)
    })

})


describe('distribution func', () => {

    const unfArg = { value: "12.", index: 1, getCurses, getAreas }
    const incorArg = { value: "ef.", index: 1, getCurses, getAreas }

    test('unfinished arg', () => {
        expect(arrOfValuesToChange(unfArg)).toEqual([...new Array(unfArg.index), unfArg.value])
    })

    test('incorrect arg', () => {
        expect(arrOfValuesToChange(incorArg)).toEqual(undefined)
    })


})
