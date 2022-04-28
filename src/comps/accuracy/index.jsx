import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({getAccur, setAccur}) {
    const [value, setValue] = React.useState(2);


    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 2) setValue(2);
        else if (value > 10) setValue(10);
    };


    setAccur({accur: 123})
    console.log(getAccur)


    return (
        <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
                step: 1,
                min: 2,
                max: 10,
                type: 'number'
            }}
        />
    );
}
