import * as React from 'react';
import Slider from '@mui/material/Slider';


export default ({ getAccur, setAccur }) => {



    const handleInputChange = (event) =>
        setAccur({ code: Number(event.target.value) });





    return (
        <Slider
            value={getAccur}
            onChange={handleInputChange}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={10}
            marks
        />
    )







}


