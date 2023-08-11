import React, {FunctionComponent, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.wellPaidGreen,
  },
}));


const Redirect:FunctionComponent = () => {
  const classes = useStyles();

  useEffect(() => {
    (async() => {
      
    })();
  }, []);

  return <Backdrop open className={classes.backdrop}>
    <CircularProgress color="inherit" />
  </Backdrop>;
}

export default Redirect;
