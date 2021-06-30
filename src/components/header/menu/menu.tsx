import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../constants/routes';
import { Button } from '@material-ui/core';
import { Settings, Dashboard } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
  },
}));

export const Menu = () => {
  const classes = useStyles();

  return (
    <div>
      <Link to={Routes.DASHBOARD}>
        <Button
          variant="text"
          className={classes.button}
          startIcon={<Dashboard />}
        >
          Dashbioard
        </Button>
      </Link>


      <Link to={Routes.ACCOUNT}>
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<Settings />}
        >
          Settings
        </Button>
      </Link>
    </div>
  );
}