import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
     
  },
  toolBar: {
      backgroundColor: 'black',
      justifyContent: 'space-between'
  },
  homeButton: {
    marginRight: theme.spacing(2),
    fontSize: 'large'
  },
  favoriteButton: {
      marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton component={Link} to ='/' edge="start" className={classes.homeButton} color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <IconButton component={Link} to ='/favorites' edge="start" className={classes.favoriteButton} color="inherit" aria-label="favorites">
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
