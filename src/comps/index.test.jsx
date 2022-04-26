import { screen, fireEvent, waitFor, within } from '@testing-library/react';
import App from '.';
import RenderWithRedux from "../elems/test_helpers/renderWithRedux";
import { idForCursField, idForListBox, idForTextField } from '../elems/test_helpers/propsForTesting'


describe('All tests', () => {

    const moneyId = 'AttachMoneyIcon'
    const deleteId = 'DeleteIcon'
    const addCircleId = 'AddCircleIcon'

    const firstCurs = 'RUB'
    const secondCurs = 'AUD'

    let moneyIcon, textField, deleteIcon, addCircleIcon, listBox, cursArr, selectedLabel, inputIn


    beforeEach(() => {
        RenderWithRedux(<App />)
    })

    test('first render', () => {
        moneyIcon = screen.getAllByTestId(moneyId)
        addCircleIcon = screen.getByTestId(addCircleId)
        textField = screen.getAllByTestId(idForTextField)
        deleteIcon = screen.getAllByTestId(deleteId)

        expect(moneyIcon[0]).toBeInTheDocument();
        expect(addCircleIcon).toBeInTheDocument();
        expect(textField[0]).toBeInTheDocument();
        expect(deleteIcon[0]).toBeInTheDocument();
    })

    //работает только при удачном интернет-запросе
    test('load curses', async () => {

        await waitFor(() =>
            expect(screen.getAllByTestId(idForCursField(0)).length).toBe(35)
        )
    })

    test('add area', () => {
        addCircleIcon = screen.getByTestId(addCircleId)
        fireEvent.click(addCircleIcon)
        fireEvent.click(addCircleIcon)
        moneyIcon = screen.getAllByTestId(moneyId)
        expect(moneyIcon.length).toBe(3)
    })

    test('focus/unfocus on money', () => {
        moneyIcon = screen.getAllByTestId(moneyId)
        listBox = screen.getAllByTestId(idForListBox)

        fireEvent.focus(moneyIcon[0])
        expect(listBox[0]).toBeVisible();

        fireEvent.focusOut(moneyIcon[0])
        expect(listBox[0]).not.toBeVisible();
    })

    test('focus/unfocus on listbox', () => {
        moneyIcon = screen.getAllByTestId(moneyId)
        listBox = screen.getAllByTestId(idForListBox)

        fireEvent.focus(listBox[0])
        expect(listBox[0]).toBeVisible();

        fireEvent.focusOut(listBox[0])
        expect(listBox[0]).not.toBeVisible();

    })

    test('delete area', () => {
        deleteIcon = screen.getAllByTestId(deleteId)
        fireEvent.click(deleteIcon[0])
        moneyIcon = screen.getAllByTestId(moneyId)
        expect(moneyIcon.length).toBe(2)
    })

    //работает только при удачном интернет-запросе
    test('set curses', () => {
        cursArr = screen.getAllByTestId(idForCursField(0))
        fireEvent.click(cursArr[0])
        textField = screen.getAllByTestId(idForTextField)
        selectedLabel = within(textField[0]).getByLabelText(firstCurs)
        expect(selectedLabel).toBeInTheDocument();

        cursArr = screen.getAllByTestId(idForCursField(1))
        fireEvent.click(cursArr[0])
        textField = screen.getAllByTestId(idForTextField)
        selectedLabel = within(textField[1]).getByLabelText(secondCurs)
        expect(selectedLabel).toBeInTheDocument();

    })

    //работает только при удачном интернет-запросе
    test('you cant pick the same curs', () => {
        cursArr = screen.getAllByTestId(idForCursField(1))
        expect(cursArr.length).toBe(34);
    })

    test('input first value', () => {

        let testValue = 123
        textField = screen.getAllByTestId(idForTextField)
        inputIn = within(textField[0]).getByDisplayValue('')
        fireEvent.input(inputIn, { target: { value: testValue } })
        inputIn = within(textField[0]).getByDisplayValue(testValue)
        expect(inputIn).toBeInTheDocument();

    })

    //работает только при удачном интернет-запросе
    test('second value was converted', () => {

        textField = screen.getAllByTestId(idForTextField)
        inputIn = within(textField[1]).getByDisplayValue(/^\d+(.\d+)?/)
        expect(inputIn).toBeInTheDocument();
    })


})

