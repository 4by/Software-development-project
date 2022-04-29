import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AddCircle from '@mui/icons-material/AddCircle';
import { connect } from 'react-redux';
import { sharedProps, sharedMethods } from '../state/redux/stateBinder';
import FieldsArray from './fields'
import Accuracy from './accuracy'

const View = ({ setText, getAreas, getAccur, setAccur, addArea, getAPItoAsync, ...props }) => {

  useEffect(() => { getAPItoAsync() }, []);

  return (
    <>
      <Accuracy {...{ setText, getAreas, getAccur, setAccur }} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} >
        <FieldsArray {...{ setText, getAreas, getAccur, ...props }} />
        <AddCircle onClick={() => addArea()} />
      </Box>

    </>
  );
};

export default connect(sharedProps, sharedMethods)(View);

