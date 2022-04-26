import React from 'react';
import Decimal from 'decimal.js';

export const inputFilter = input => {

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

export const converte = ({ value, fromCurs, toCurs }) =>
  value
    ? +(new Decimal(fromCurs)
      .mul(value)
      .div(toCurs)
      .toFixed(2))
    : ''


export const converteActiveAreas = ({ value, index, getAreas, getCurses }) =>
  getAreas.map(e => e.curs
    ? converte({
      value,
      fromCurs: getCurses[getAreas[index].curs],
      toCurs: getCurses[e.curs]
    })
    : undefined
  )


export const distrText = ({ value, index, getAreas, getCurses }) => {
  const input = inputFilter(value)
  return (input == 'notFinished')
    ? [...new Array(index), value]
    : (input == 'valid')
      ? converteActiveAreas({ value, index, getAreas, getCurses })
      : undefined

}

export const setTextToAll = ({ value, index, getAreas, getCurses, setText }) =>
  distrText({ value, index, getAreas, getCurses })
    ?.forEach((code, index) => (code != undefined) ? setText({ code, index }) : undefined)

