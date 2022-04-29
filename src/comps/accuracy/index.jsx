import SliderComp from './slider'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default (props) =>
    <Container maxWidth="sm" >
        <Typography> Accuracy </Typography>
        <SliderComp {...props} />
    </Container>