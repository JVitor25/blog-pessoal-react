import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>


      <Router>
        <Navbar />
        <div className="visualizacao">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPostagem />} />


            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />

            <Route path="/formularioPostagem" element={<CadastroPostagem />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
