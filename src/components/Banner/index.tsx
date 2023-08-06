import React, { FC, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Snackbar as MuiSnackbar,
  SnackbarProps,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export interface Props
  extends Omit<SnackbarProps, "severity" | "children" | "open"> {
  severity: "success" | "error";
  text: string;
}

const changeBackgroundColor = (severity: string, theme: any) => {
  switch (severity) {
    case "success":
      return theme.palette.mintGreen;
    case "error":
      return theme.palette.errorRed;
    default:
      break;
  }
};

const useStyles = makeStyles((theme) => ({
  root: (props: Props) => ({
    backgroundColor: changeBackgroundColor(props.severity, theme),
    borderRadius: "15px",
    padding: "15px",
    marginTop: props.severity && "25px",
    top: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "max-content",
    display: "flex !important",
    "&.MuiAlert-message": {
      display: "flex !important",
    },
  }),
}));

const Banner: FC<Props> = (props) => {
  const { severity, children, anchorOrigin, text, ...rest } = props;
  const classes = useStyles(props);

  const [display, setDisplay] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (text) {
      clearTimeout(timeoutId as any);
      setDisplay(true);
      let newTimeoutId = setTimeout(() => setDisplay(false), 8000);
      setTimeoutId(newTimeoutId as any);
    }

    return () => clearTimeout(timeoutId as any);
  }, [text]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setDisplay(false);
  };

  return anchorOrigin ? (
    <MuiSnackbar
      open={display}
      anchorOrigin={anchorOrigin}
      {...rest}
      onClose={handleClose}
    >
      <Alert
        icon={false}
        classes={{ root: classes.root }}
        severity={severity}
        onClose={handleClose}
      >
        <Typography>{text}</Typography>
      </Alert>
    </MuiSnackbar>
  ) : (
    (display && (
      <Alert icon={false} classes={{ root: classes.root }} severity={severity}>
        <Typography>{text}</Typography>
      </Alert>
    )) || <></>
  );
};

export default Banner;
