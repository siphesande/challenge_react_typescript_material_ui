import React, { useState } from 'react';
import { unionOfTheTwoArrays } from '../tasks/task';
import Button from '@material-ui/core/Button'
import LaunchIcon from '@material-ui/icons/Launch';



const UnionArray: React.FC = () => {

  return (

    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<LaunchIcon />}
      >
        Start
      </Button>
      <p>UnionArray</p>
    </div>

  );
};




export default UnionArray;