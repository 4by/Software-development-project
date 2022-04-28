import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default ({ getAccur, setAccur }) => {

    const handleInputChange = (event) => {
        const plusOrMinusOne = event.target.value === '' ? '' : Number(event.target.value)
        setAccur({ accur: plusOrMinusOne});
    };

    const handleBlur = () => {
        if (getAccur < 2) setAccur({ accur: 2 });
        else if (getAccur > 10) setAccur({ accur: 10 });
    };


    return (
        <Input
            value={getAccur}
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
