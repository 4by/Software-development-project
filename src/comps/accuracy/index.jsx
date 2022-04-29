import SliderComp from './slider'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default ({getAccur, setAccur}) =>
    <Container maxWidth="sm" >
        <Typography> Accuracy: {getAccur} </Typography>
        <SliderComp {...{getAccur, setAccur}} />
    </Container>