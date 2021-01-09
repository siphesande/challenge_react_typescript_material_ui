import React, { useState } from 'react';
import { rowsWithShortestDistance } from '../tasks/task';
import Button from '@material-ui/core/Button'
import LaunchIcon from '@material-ui/icons/Launch';
import Typography from '@material-ui/core/Typography';



const ShortestDistance: React.FC = () => {
  const [start, setStart] = useState(false);
  const [shortest_distance_array, setShortest_distance_array] = useState(rowsWithShortestDistance(-34.270836, 18.459778));


  const startsExecution = () => {
    setStart(true)
  }
  console.log(shortest_distance_array);
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
            <div>

              <div>
                <Typography variant="h4">Below are 10 rows from data.json with the shortest distance
                from the latitude and longitude
                </Typography>
              </div>
              <hr />

              {
                shortest_distance_array.map((item, key) => (

                  <div key={key}>
                    <Typography>{item.euclidean_from_lat_long} km</Typography>
                    <Typography>{item.meta} </Typography>

                    <hr />
                  </div>

                ))
              }

            </div>


          </div>
          : <Typography> NOTHING TO SHOW, PRESS START BUTTON</Typography>
        }
      </div>





    </div>

  );
};




export default ShortestDistance;
