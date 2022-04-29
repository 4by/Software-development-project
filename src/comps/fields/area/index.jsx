import Box from '@mui/material/Box';
import TextElem from './textElem';
import IconsElem from './iconsElem';

export default ({ getAreas, getAccurAreas, index, remArea, getCurses, setText, visibObj, getAccur }) =>
    <Box sx={{ display: 'flex' }}>
        <TextElem {...{ getAccur, setText, index, getAreas, getCurses }} />
        <IconsElem {...{ remArea, index, visibObj }} />
    </Box>
