import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function infoPortfolio(){

    return(
        <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
A few Projects...
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Here you can find few projects that I have worked on it :) 
        <p>Enjoy checking them up!</p>

        </Typography>
      </Container>
    )
}