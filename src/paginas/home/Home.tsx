import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="background">
                <Grid container justifyContent="center" item xs={12} sm={6}>
                    <Box className="card">
                        <Box >
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#025727", color: "white" }}>Ver Postagens</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="center">
                        <img src="https://i.pinimg.com/564x/58/25/07/582507fc7426bda9c04c367942047170.jpg" alt="" width="426px" height="526px" />
                    </Box>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
            </Grid>
        </>
    );
}

export default Home;
