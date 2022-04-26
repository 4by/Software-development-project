import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AddCircle from '@mui/icons-material/AddCircle';
import { connect } from 'react-redux';
import { sharedProps, sharedMethods } from '../state/redux/stateBinder';
import FieldsArray from './fields'

const View = ({ addArea, getAPItoAsync, ...props }) => {

  useEffect(() => { getAPItoAsync() }, []);

  return (
    <>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} >

        <FieldsArray { ...props } />

        <AddCircle onClick={() => addArea()} />
      </Box>

    </>
  );
};

export default connect(sharedProps, sharedMethods)(View);

