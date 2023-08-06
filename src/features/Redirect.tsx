import React, {FunctionComponent, useEffect} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import API from 'api';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.wellPaidGreen,
  },
}));


const Redirect:FunctionComponent = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    (async() => {
      const accessToken = await getAccessTokenSilently();
      let wellPaidUser = null;
      localStorage.setItem(process.env.REACT_APP_AUTH0_TOKEN || '', accessToken);
      try {
        wellPaidUser = await API.getUser(user?.sub || ''); 
      } catch (error) {
        console.log(error);
      }

      if(wellPaidUser) {
        history.push('dashboard');
      } else {
        history.push('onboarding/signup');
      }
    })();
  }, []);

  return <Backdrop open className={classes.backdrop}>
    <CircularProgress color="inherit" />
  </Backdrop>;
}

export default Redirect;
