import React, { useState } from 'react';
import ComboBox from '../components/ComboBox';
import { Grid, Container } from '@material-ui/core';
import ParkCard from '../components/ParkCard';
import NavBar from '../components/NavBar';
import '../HomePage.css';

function HomePage() {
    const [parks, setParks] = useState([]);
    const [selectState, setSelectState] = useState([]);
    const stateCode = encodeURI(selectState.code);
    const key = ('kRgFQ9paGEWNyAS5mSQKCNynkCvoFDwexnKSmvUI')
   
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&fields=images&api_key=${key}`)
            .then((res) => res.json())
            .then((list) => {
                setParks(list.data);
                console.log(list.data)

            });
    }
    
    return (
        <div className='homepage'>
            <div className='navBar'>
                <NavBar />
            </div>
            <div className='logo'>
               <img src='/allParks2.png' alt='logo' />
            </div>
            <form onSubmit={handleSubmit}>
               <div className='title'>
                 <h1>AllParks</h1>
               </div>
               <div className='searchBar'>
                <p>Find A Park</p>
                <ComboBox onChange={(e, value) => setSelectState(value)} />
               </div>
            </form>
            <Container>
                <Grid container direction='row' spacing={2}>
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
export default HomePage;