import { selectAreaCurs } from '../../../elems'
import { forCursField } from '../../../elems/test_helpers/propsForTesting'

export default ({ code, getCurses, index, getAreas, ...props }) => {




    return <li
        {...forCursField(index)}
        aria-selected={code == getAreas[index].curs ? true : false}
        onClick={() => { selectAreaCurs({ code, getCurses, index, getAreas, ...props }) }}
    >
        {code}:{getCurses[code]}
    </li>


}