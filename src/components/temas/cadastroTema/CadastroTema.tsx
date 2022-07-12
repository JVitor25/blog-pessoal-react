import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import Tema from "../../../models/Tema"
import { buscaId, post, put } from '../../../services/Service';
import "./CadastroTema.css";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [temas, setTemas] = useState<Tema>({
    id: 0,
    descricao: ""
  })

  useEffect(() => {
    if (token === "") {
      toast.error("Voce precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined
    });
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined)
      findById(id)
  }, [id])

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTemas({
      ...temas,
      [e.target.name]: e.target.value,
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("tema " + JSON.stringify(temas))
    if (id !== undefined) {
      console.log(temas)
      put(`/temas`, temas, setTemas, {
        headers: {
          'Authorization': token
        }
      })
      toast.success("Tema atualizado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined
      });
    } else {
      post(`/temas`, temas, setTemas, {
        headers: {
          'Authorization': token
        }
      })
      toast.success("Tema cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined
      });
    }
    back()
  }

  function back() {
    navigate("/temas")
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadadastro tema</Typography>
        <TextField value={temas.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth></TextField>
        <Button type="submit" variant="contained" color="primary">Finalizar</Button>
      </form>
    </Container>
  );
}

export default CadastroTema;