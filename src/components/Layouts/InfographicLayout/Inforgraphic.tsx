import React, { FC } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';

import Typography from '../../Typography';
export interface InfographicProps {
  imgSrc: string;
  title?: string;
  info?: string;
}

const useStyles = makeStyles((theme) => ({
  backgroundImage: (props: InfographicProps) => ({
    backgroundImage: `url(${props.imgSrc})`,
    width: 'inherit',
    height: 'inherit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }),
  imageContainer: {
    height: '200px',
    maxWidth: '200px',
    marginBottom: '40px',
    marginTop: '40px',
    [theme.breakpoints.up('md')]: {
      height: '325px',
      maxWidth: '325px',
      marginBottom: '40px',
      marginTop: '80px',
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: '0px',
      marginTop: '0px',
      height: '300px',
      maxWidth: '300px',
    },
  },
  infoContainer: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '65px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0px',
    },
  },
  title: {
    marginBottom: '15px',
  },
  infoContent: {
    maxWidth: '350px',
  },
  container: {
    padding: '25px',
  },
  infographicBody: {
    maxWidth: '350px',
  },
}));

const Infographic: FC<InfographicProps> = (props) => {
  const { title, info } = props;

  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const matchesXs = useMediaQuery(theme.breakpoints.only('xs'));

  const classes = useStyles(props);

  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      alignContent={matchesMdUp || matchesXs ? 'flex-start' : 'center'}
      justify="center"
    >
      <Grid
        className={classes.imageContainer}
        container
        item
        xs={12}
        sm={5}
        md={12}
        justify="center"
      >
        <div className={classes.backgroundImage}></div>
      </Grid>
      <Grid
        className={classes.infoContainer}
        direction="column"
        container
        item
        xs={12}
        sm={7}
        md={12}
        alignContent="center"
        justify="center"
      >
        <Typography
          align={matchesMdUp || matchesXs ? 'center' : 'left'}
          className={classes.title}
          variant="h2"
        >
          {title}
        </Typography>
        <Typography
          align={matchesMdUp || matchesXs ? 'center' : 'left'}
          paragraph
          variant="body1"
          className={classes.infographicBody}
        >
          {info}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Infographic;
