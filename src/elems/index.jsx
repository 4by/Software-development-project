import React from 'react';
import Decimal from 'decimal.js';

//общие ф-и
const inputFilter = input => {

  const altGroup = '-?\\d+[.]?';
  const start1 = '-?0[.]';
  const start2 = '-?[1-9]\\d*[.]';
  const startGroup = `(${start1}|${start2})?`;
  const end = '(\\d+(e[-]?)?[1-9]?)?';

  const validQuery = new RegExp(`^(${altGroup}|(${startGroup}${end}))?$`);
  const notFinishedQuery = new RegExp(`([.e-]0*)$`);
  // const afterZeroQuery = new RegExp(`^0\\d`);

  return validQuery.test(input)
    ? notFinishedQuery.test(input)
      ? 'notFinished'
      : 'valid'
    : "notValid"

};
const converte = ({ getAccur, value, fromCurs, toCurs }) =>
  value
    ? +(new Decimal(fromCurs)
      .mul(value)
      .div(toCurs)
      .toFixed(getAccur))
    : ''



//ф-и для листбокса
const valueForConvert = ({ index, getAreas }) =>
  (inputFilter(getAreas[index].text) == 'valid' && getAreas[index].text)
    ? getAreas[index]
    : getAreas
      .filter(e => e.text)
      .find(e => inputFilter(e.text) == 'valid')
    ?? null

export const selectAreaCurs = ({ getAccur, setCurs, setText, code, index, getCurses, getAreas }) => {
  setCurs({ code, index })
  const convertValue = valueForConvert({ index, getAreas })
  if (convertValue) {
    code = converte({
      getAccur,
      value: convertValue.text,
      fromCurs: getCurses[convertValue.curs],
      toCurs: getCurses[code]
    });
    setText({ code, index })
  }
}



//ф-и для полей
const converteActiveAreas = ({ getAccur, value, index, getAreas, getCurses }) =>
  getAreas.map(e => e.curs
    ? converte({
      getAccur,
      value,
      fromCurs: getCurses[getAreas[index].curs],
      toCurs: getCurses[e.curs]
    })
    : undefined
  )

const arrOfValuesToChange = ({ value, index, getAreas, getCurses, getAccur }) => {
  const input = inputFilter(value)
  return (input == 'notFinished')
    ? [...new Array(index), value]
    : (input == 'valid')
      ? converteActiveAreas({ value, index, getAreas, getCurses, getAccur })
      : undefined

}

export const setTextToAll = ({ value, index, getAreas, getCurses, setText, getAccur }) =>
  arrOfValuesToChange({ value, index, getAreas, getCurses, getAccur })
    ?.forEach((code, index) => (code != undefined) ? setText({ code, index }) : undefined)
