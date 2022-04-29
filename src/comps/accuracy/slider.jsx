import * as React from 'react';
import Slider from '@mui/material/Slider';


export default ({ setText, getAreas, getAccur, setAccur }) => {



    const handleInputChange = (event) => {
        let newAccur = Number(event.target.value)
        setAccur({ accur: newAccur });



        // const qq = [...getAreas]
        // qq.map((e, i, arr) => {
        //     const newText = Number(e.text).toFixed(1)
        //     arr[i] = { ...e, text: newText }
        // })
        // console.log(qq)




    }




    return (
        <Slider
            value={getAccur}
            onChange={handleInputChange}
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={10}
            marks
        />
    )







}


