import TextField from '@mui/material/TextField';
import { setTextToAll } from '../../../elems'
import { forTextElem } from '../../../elems/test_helpers/propsForTesting';

export default ({ getAreas, index, getAccur,...props }) => {

    const currCurs = getAreas[index].curs
    const currText = getAreas[index].text
    // const currText = Number(getAreas[index].text).toFixed(getAccur)

    return <TextField
        {...forTextElem}
        variant="filled"
        disabled={currCurs ? false : true}
        label={currCurs ?? 'select a curs'}
        value={currText}
        onChange={
            e => setTextToAll({ value: e.target.value, index, getAreas, getAccur, ...props })
        }
    />

}