import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    height: 'calc(100vh - 64px)',
    background: 'url(https://via.placeholder.com/1500x900.png?text=Hero+Section+Background) no-repeat center center',
    backgroundSize: 'cover',
    color: 'white',
  },
  heroContent: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  heroTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  heroDescription: {
    marginBottom: theme.spacing(4),
  },
  heroButton: {
    borderRadius: 25,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    fontWeight: 'bold',
    backgroundColor: '#f8e71c',
    color: 'black',
    '&:hover': {
      backgroundColor: '#f8e71c',
      color: 'black',
    },
  },
}));

function HeroSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.heroSection}>
      <Grid item xs={12} className={classes.heroContent}>
        <Typography variant="h2" className={classes.heroTitle}>
          Welcome to Our Travel Website
        </Typography>
        <Typography variant="subtitle1" className={classes.heroDescription}>
          Let us help you plan your next adventure and create unforgettable memories.
        </Typography>
        <Button variant="contained" className={classes.heroButton}>
          Browse Destinations
        </Button>
      </Grid>
    </Grid>
  );
}

export default HeroSection;
