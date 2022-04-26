import Box from '@mui/material/Box';
import Listbox from './listbox'
import AreaElem from './area'

export default ({ remArea, setCurs, index, setList, ...props }) => {

  const sv = () => setList({ index, isVisible: true })
  const sh = () => setList({ index, isVisible: false })

  const visibObj = {
    onMouseOver: sv,
    onMouseOut: sh,
    onFocus: sv,
    onBlur: sh
  }

  props = { index, visibObj, ...props }

  return <Box sx={{ m: 1 }}>
    <AreaElem {...{ remArea, ...props }} />
    <Listbox {...{ setCurs, ...props }} />
  </Box>
};

