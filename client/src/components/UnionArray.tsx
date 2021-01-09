import React, { useState } from 'react';
import { unifiedArray } from '../tasks/task';
import SplitButton from './DropdownButton';
import Button from '@material-ui/core/Button'
import LaunchIcon from '@material-ui/icons/Launch';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//const p3Data = require("../tasks/p3Data.json");

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const UnionArray: React.FC = () => {
  const [start, setStart] = useState(false);
  //const [combinationArray, setCombinationArray] = useState(unionOfTheTwoArrays(p3Data.testSet1, p3Data.testSet2));

  const classes = useStyles();

  const startsExecution = () => {
    setStart(true)

  }

  //console.log(unifiedArray)


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
                <Typography variant="h4">Below is a table with each row containing the name of the
                object and a button to open a drop-down showing a list containing the individual
                fields and their values.
              </Typography>
              </div>
              <hr />

              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Object Name</TableCell>
                      <TableCell align="center">Button to open a drop-down</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {unifiedArray.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell size="medium" component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell size="medium" align="right">
                          
                            <SplitButton
                              drop_down_item={Object.entries(row)}

                            />
                            <div style={{height: "100px"}}></div>

                          
                        </TableCell>

                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </div>


          </div>
          : <Typography> NOTHING TO SHOW, PRESS START BUTTON</Typography>
        }
      </div>





    </div>

  );
};




export default UnionArray;