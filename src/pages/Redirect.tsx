import React, {FunctionComponent, useEffect} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import API from '../api';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.wellPaidGreen,
  },
}));


const Redirect:FunctionComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    (async() => {
      
    })();
  }, []);

  return <Backdrop open className={classes.backdrop}>
    <CircularProgress color="inherit" />
  </Backdrop>;
}

export default Redirect;
