import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(6),
  },
  footerTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  footerLink: {
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className={classes.footerTitle}>
              About Us
            </Typography>
            <Typography variant="body1">
              We are a team of travel enthusiasts who are passionate about
              helping you plan your next adventure.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className={classes.footerTitle}>
              Contact Us
            </Typography>
            <Typography variant="body1">
              Email: info@travelwebsite.com
            </Typography>
            <Typography variant="body1">Phone: +1 (555) 555-5555</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className={classes.footerTitle}>
              Useful Links
            </Typography>
            <Typography variant="body1">
              <a href="#" className={classes.footerLink}>
                FAQ
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className={classes.footerLink}>
                Privacy Policy
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className={classes.footerLink}>
                Terms of Use
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
