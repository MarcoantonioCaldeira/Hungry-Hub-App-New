import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from '../components/Login/Login';
import CadastroCliente from '../components/CadastroCliente/CadastroCliente';
import CadastroRestaurante from '../components/CadastroRestaurante/CadastroRestaurante';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard/Dashboard';

const RoutesComponent  = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroCliente />} />
            <Route path="/cadastrorestaurante" element={<CadastroRestaurante />} />
            
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}


const RoutesContainer = () => {
    return (
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    );
  }

export default RoutesContainer;