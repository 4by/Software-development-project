import { styled } from '@mui/system';
import CursesArr from './cursFieldArr'
import { forListBox } from '../../../elems/test_helpers/propsForTesting';

export const Listbox = styled('ul')`
font-family: IBM Plex Sans, sans-serif;
font-size: 0.875rem;
color: #2eddc6;
background: #d46262;
padding: 0;
margin: 0 0 0 0;
position: absolute;
height: auto;
transition: opacity 0.1s ease;
width: 250px;
box-shadow: 0 5px 13px -3px #333;
z-index: 2;
&.hidden {
 opacity: 0;
 visibility: hidden;
 transition: opacity 0.4s 0.5s ease, visibility 0.4s 0.5s step-end;
}

& > li {
 padding: 5px;
 &:hover {font-size: 1.5rem;}
 &[aria-selected='true'] {color: #078fff;}
}
`;

export default ({ getAreas, index, visibObj, ...props }) => {

    return <Listbox
        {...forListBox}
        sx={{ height: 80, overflow: 'auto' }}
        className={getAreas[index].listVisible ? '' : 'hidden'}
        {...visibObj}
    >
        <CursesArr {...{ getAreas, index, ...props }} />

    </Listbox>
}