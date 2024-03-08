import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from '../components/Login/Login';
import CostumerRegistration from '../components/CostumerRegistration/CostumerRegistration';
import RestaurantRegistration from '../components/RestaurantRegistration/RestaurantRegistration';
import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Dashboard';
import FormularioTeste from '../components/CostumerRegistration/FormularioTeste';

const RoutesComponent  = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<FormularioTeste />} />
            <Route path="/cadastrorestaurante" element={<RestaurantRegistration />} />
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