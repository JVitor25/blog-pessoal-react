import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from "@material-ui/core"
import { alertClasses, Box } from "@mui/material"
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaPostagem() {
    const [postagens, setPostagens] = useState<Postagem[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token === '') {
            alert("Você presica estar logado!")
            navigate("/login")
        }
    }, [token])

    async function getPostagem() {
        await busca("/postagens", setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPostagem()
    }, [postagens.length])

    return (
        <>
            {
                postagens.map(postagem => (
                    <Box margin={2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Postagens</Typography>
                                <Typography variant="h5" component="h2">{postagem.titulo}</Typography>
                                <Typography variant="body2" component="p">{postagem.texto}</Typography>
                                <Typography variant="body2" component="p">{postagem.tema?.descricao}</Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary">atualizar</Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">deletar</Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}
export default ListaPostagem;