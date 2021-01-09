import React, { useState } from 'react';
import { rowsWithShortestDistance } from '../tasks/task';
import Button from '@material-ui/core/Button'
import LaunchIcon from '@material-ui/icons/Launch';



const ShortestDistance: React.FC = () => {

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
      <p>ShortestDistance</p>
    </div>

  );
};




export default ShortestDistance;
