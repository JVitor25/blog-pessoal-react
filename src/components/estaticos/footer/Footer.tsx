import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css";

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Siga-me nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/JVitor25" target="_blank">
                                <GitHubIcon className="rede-sociais" />
                            </a>
                            <a href="https://www.instagram.com/joao3062/" target="_blank">
                                <InstagramIcon className="rede-sociais" />
                            </a>
                            <a href="https://www.linkedin.com/in/joão-vitor-lima25/" target="_blank">
                                <LinkedInIcon className="rede-sociais" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className="textos" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;