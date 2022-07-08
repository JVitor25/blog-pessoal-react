import React, { useEffect } from 'react';
import { Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material"
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem"
import "./Home.css";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    useEffect(() => {
        if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
    
        }
      }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid container justifyContent="center" item xs={12} sm={6}>
                    <Box className="card">
                        <Box >
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo" >Seja bem vindo(a)!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo" >expresse aqui os seus pensamentos e opiniões!</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                                <ModalPostagem/>
                            </Box>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="center">
                        <img src="https://i.pinimg.com/564x/58/25/07/582507fc7426bda9c04c367942047170.jpg" alt="Imagem de uma Árvore." className="imagemHome" />
                    </Box>
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>

            </Grid>
        </>
    );
}

export default Home;
