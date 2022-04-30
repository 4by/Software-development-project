import React from 'react';
import Decimal from 'decimal.js';

//общие ф-и
export const inputFilter = input => {

  const start1 = '0?[.]';
  const start2 = '[1-9]\\d*[.]';
  const startGroup = `(${start1}|${start2})`;
  const end = '(\\d+(e[-]?)?[1-9]?)?';

  const notFinishedQuery_Digit = new RegExp(`([.e-]0*)$`);
  const notFinishedQuery_Zero = new RegExp(`${startGroup}\\d*0$`);
  const validQuery = new RegExp(`^(${startGroup}?${end})?$`);

  console.log(notFinishedQuery_Zero.test(input))

  return validQuery.test(input)
    ? notFinishedQuery_Digit.test(input) || notFinishedQuery_Zero.test(input)
      ? 'notFinished'
      : 'valid'
    : "notValid"

};
export const converte = ({ value, fromCurs, toCurs }) =>
  value
    ? +new Decimal(fromCurs)
      .mul(value)
      .div(toCurs)
    : ''



//ф-и для листбокса
const valueForConvert = ({ index, getAreas }) =>
  (inputFilter(getAreas[index].text) == 'valid' && getAreas[index].text)
    ? getAreas[index]
    : getAreas
      .filter(e => e.text)
      .find(e => inputFilter(e.text) == 'valid')
    ?? null

export const selectAreaCurs = ({ setCurs, setText, code, index, getCurses, getAreas }) => {
  setCurs({ code, index })
  const convertValue = valueForConvert({ index, getAreas })
  if (convertValue) {
    code = converte({
      value: convertValue.text,
      fromCurs: getCurses[convertValue.curs],
      toCurs: getCurses[code]
    });
    setText({ code, index })
  }
}



//ф-и для полей
export const converteActiveAreas = ({ getAccur, value, index, getAreas, getCurses }) =>
  getAreas.map(e =>
    (e.curs)
      ? converte({
        getAccur,
        value,
        fromCurs: getCurses[getAreas[index].curs],
        toCurs: getCurses[e.curs]
      })
      : undefined
  )

export const arrOfValuesToChange = ({ value, index, getAreas, getCurses, getAccur }) => {
  const input = inputFilter(value)

  return (input == 'notFinished')
    ? [...new Array(index), value]
    : (input == 'valid')
      ? converteActiveAreas({ value, index, getAreas, getCurses, getAccur })
      : undefined

}

export const setTextToAll = ({ value, index, getAreas, getCurses, setText, getAccur }) =>
  arrOfValuesToChange({ value, index, getAreas, getCurses, getAccur })
    ?.forEach((code, index) =>
      (code != undefined)
        ? setText({ code, index })
        : undefined
    )

