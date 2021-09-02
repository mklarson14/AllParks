import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { actionRemovePark, actionSavePark } from '../redux/actions/favorites';
//import { Delete } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        maxWidth: '100%', 
        flex: '1 0 100%',
        display: 'flex',
        flexDirection: 'column',
        
    },
    media: {
        height: 200,
        width: '100%'
    },
    actionArea: {
        display: 'flex', 
        flexDirection: 'column',
        flexGrow: '1'

    },
    content: {
        flexGrow: '1',
        
    },
    cardActions: {
        justifyContent: 'space-between',
    }
  

});


export default function ParkCard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const parks = useSelector((state)=> state.parks)
    const isFavorite = parks.some((park)=> props.parkCode === park.parkCode)
    

    function toggleSave(park) {
        if (isFavorite) {
            dispatch(actionRemovePark(park))
        } 
        else {
            dispatch(actionSavePark(park))

        }
    }

    return (

        <Card className={classes.root}>
            <CardActionArea className={classes.actionArea}>
                <CardMedia
                    className={classes.media}
                    image={props.images[0].url}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.fullName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.designation}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <Link to={`/learnmore/${props.parkCode}`}>Learn More</Link>
                </Button>
                <IconButton onClick={()=> toggleSave(props)}>
                    {isFavorite ? (<FavoriteIcon color="secondary" size="small" aria-label="like"/>):(<FavoriteBorderIcon color="secondary" size="small" aria-label="like"/>)}
                    {/* {ifSelected ? (<FavoriteBorderIcon color="secondary" size="small" aria-label="like" />): (<Delete color="action" size="small" aria-label="delete"/>)*/}
                    
        
                </IconButton>
                
            </CardActions>
        </Card>

    );
}
