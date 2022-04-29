import Box from '@mui/material/Box';
import Listbox from './listbox'
import AreaElem from './area'

export default ({ remArea, setCurs, index, setListVisib, ...props }) => {

  const sv = () => setListVisib({ index, code: true })
  const sh = () => setListVisib({ index, code: false })

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

