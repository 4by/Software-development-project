import { converte, inputFilter } from '../../../elems'
import { forCursField } from '../../../elems/test_helpers/propsForTesting'

export default ({ code, currArea, setCurs, setText, getAreas, getCurses, index }) => {

    const valueForConvert = currArea.text
        ? currArea
        : getAreas
            .filter(e => e.text)
            .find(e => inputFilter(e.text) == 'valid')
        ?? null



    return <li
        {...forCursField(index)}
        aria-selected={code == currArea.curs ? true : false}
        onClick={() => {

            setCurs({ code, index })

            if (valueForConvert) {
                code = converte({ value: valueForConvert.text, fromCurs: getCurses[valueForConvert.curs], toCurs: getCurses[code] });
                setText({ code, index })
            }

        }}
    >
        {code}:{getCurses[code]}
    </li>


}