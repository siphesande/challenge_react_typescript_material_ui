import React, { useState } from 'react';
import { validityChecks } from '../tasks/task';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch';



const ValidityChecks: React.FC = () => {
  const [start, setStart] = useState(false);
  const [files_are_valid, setFiles_are_valid] = useState(false);


  const startsExecution = () => {
    setStart(true)
    setFiles_are_valid(validityChecks())
  }
  


  return (

    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<LaunchIcon />}
        onClick={() => { startsExecution() }}
      >
        Start
      </Button>
      <div>
        {start
          ? <div>
            {files_are_valid
              ? <Typography> Files geo.json​ and ​ data.json​ are valid!</Typography>
              : <Typography> Files geo.json​ and ​ data.json​ are not valid!</Typography>
            }

          </div>
          : <Typography> NOTHING TO SHOW, PRESS START BUTTON</Typography>
        }
      </div>
      <Typography>This is validity check page</Typography>
    </div>

  );
};




export default ValidityChecks;
