import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
            <MenuIcon />
          </IconButton>
          <Button variant="outlined" color="inherit" href="/validitychecks">Validity Checks</Button>
          <Button variant="outlined" color="inherit" href="/shortestdistance">Shortest Distance</Button>
          <Button variant="outlined" color="inherit" href="/unionarray">Union Array</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}