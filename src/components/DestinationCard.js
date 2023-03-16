import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    marginBottom: theme.spacing(4),
  },
  cardMedia: {
    height: 200,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDescription: {
    height: 90,
    overflow: 'hidden',
  },
  cardButton: {
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

function DestinationCard({ image, title, description, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.cardMedia} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.cardDescription}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.cardButton} href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default DestinationCard;
