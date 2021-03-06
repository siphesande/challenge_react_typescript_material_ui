import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
            <HomeIcon />
          </IconButton>
 
          <Button size="small" variant="outlined" color="inherit" href="/validitychecks">Validity Checks</Button>
          <Button size="small" variant="outlined" color="inherit" href="/shortestdistance">Shortest Distance</Button>
          <Button size="small" variant="outlined" color="inherit" href="/unionarray">Union Array</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}