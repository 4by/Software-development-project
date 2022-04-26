import AttachMoney from '@mui/icons-material/AttachMoney';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';


export default ({ visibObj, remArea, index }) => {
    return <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <AttachMoney sx={{ mr: 1, my: 0.5 }} {...visibObj} />
        <DeleteIcon sx={{ mr: 1, my: 0.5 }} onClick={() => remArea({ index })} />
    </Box>

}
