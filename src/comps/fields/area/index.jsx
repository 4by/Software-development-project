import Box from '@mui/material/Box';
import TextElem from './textElem';
import IconsElem from './iconsElem';

export default ({ getAreas, index, remArea, getCurses, setText, visibObj }) =>
    <Box sx={{ display: 'flex' }}>
        <TextElem {...{ setText, index, getAreas, getCurses }} />
        <IconsElem {...{ remArea, index, visibObj }} />
    </Box>
