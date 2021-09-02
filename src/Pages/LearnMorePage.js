import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, ImageList, ImageListItem } from '@material-ui/core';
import NavBar from '../components/NavBar';
import '../HomePage.css';


function LearnMorePage() {
    const [park, setPark] = useState(null);
    const { parkCode } = useParams()
    const key = ('kRgFQ9paGEWNyAS5mSQKCNynkCvoFDwexnKSmvUI');
    useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&fields=images&api_key=${key}`)
            .then((res) => res.json())
            .then((list) => {
                setPark(list.data[0]);
                console.log(list.data)

            });
    }, [parkCode]);
    if (!park) {
        return ''
    }
    const style = {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',  
    }   
    return (
        <div className='learnMorePage'>
            <div>
                <NavBar />
            </div>

            <Container className='content'>
                <Grid className='parkTitle'>
                    <Typography gutterBottom variant="h3-center" component="h1">
                        {park.fullName}
                    </Typography>
                </Grid>
                <Grid justifyContent='space-around' flexWrap='nowrap' display='flex'>
                    <ImageList style={style} cols={4}>
                        {park.images.map((image) => (
                            <ImageListItem display='flex'>
                                <img src={image.url} alt={image.altText} />
                            </ImageListItem>                    
                        ))}
                    </ImageList>
                </Grid>
                <Grid>
                    <Typography>
                        <h3>Description</h3>
                        {park.description}
                    </Typography>
                    <Typography>
                        <h3>Weather Information</h3>
                        {park.weatherInfo}
                    </Typography>
                    <Typography>
                        <h3>Location</h3>
                        {park.directionsInfo}
                    </Typography>
                </Grid>

            </Container>
        </div>
    )




}

export default LearnMorePage