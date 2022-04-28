import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AddCircle from '@mui/icons-material/AddCircle';
import { connect } from 'react-redux';
import { sharedProps, sharedMethods } from '../state/redux/stateBinder';
import FieldsArray from './fields'
import Accuracy from './accuracy'

const View = ({ getAccur, setAccur, addArea, getAPItoAsync, ...props }) => {

  useEffect(() => { getAPItoAsync() }, []);

  return (
    <>
      <Accuracy {...{ getAccur, setAccur }} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} >
        <FieldsArray {...{ getAccur, ...props }} />
        <AddCircle onClick={() => addArea()} />
      </Box>

    </>
  );
};

export default connect(sharedProps, sharedMethods)(View);

