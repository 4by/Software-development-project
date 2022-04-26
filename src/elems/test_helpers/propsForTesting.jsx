export const idForTextField = 'TextFieldId'

export const idForListBox = 'ListBoxId'

export const idForCursField = (index) => `${index}:CursFieldId`


const makePropObj = (arg) => {
    return { 'data-testid': arg }
}

export const forTextElem = makePropObj(idForTextField)

export const forCursField = index => makePropObj(idForCursField(index))

export const forListBox = makePropObj(idForListBox)
