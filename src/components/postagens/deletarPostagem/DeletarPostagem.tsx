import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [postagens, setPostagens] = useState<Postagem>();

    useEffect(() => {
        if (token === "") {
            alert("Voce precisar estar logado")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined)
            findById(id)
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate("/postagens")
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert("Postagem deletada com sucesso");
    }

    function nao() {
        navigate("/postagens")
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {postagens?.titulo}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size="large" color="primary">Sim</Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size="large" color="secondary">Não</Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default DeletarPostagem;