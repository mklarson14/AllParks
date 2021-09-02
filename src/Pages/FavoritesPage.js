import { Container, Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import ParkCard from '../components/ParkCard';
import '../HomePage.css';


const useStyles = makeStyles ({
    root: {
        marginTop: '8px'

    },
   
});

function FavoritesPage() {
    const parks = useSelector(state => state.parks)
    const classes = useStyles();


    return (
        <div className='favoritespage'>
            <div>
                <NavBar />
            </div>
            <Container>
                <Grid className={classes.root} container direction='row' spacing={2}>
                    {parks.map((park) => {
                        return (
                         <Grid container direction='column' item xs={12} sm={6} md={4} lg={3}>
                            <ParkCard {...park} />
                        </Grid>
                        )
                    })}
                    
                </Grid>
            </Container>
        </div>
    )
}

export default FavoritesPage;