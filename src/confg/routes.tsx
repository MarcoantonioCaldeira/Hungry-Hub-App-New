import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from '../components/Login/Login';
import FormRegistrationClient from '../components/CostumerRegistration/FormRegistrationClient';
import FormRegistrationRestaurent from '../components/RestaurantRegistration/FormRegistrationRestaurent';
import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Dashboard';


const RoutesComponent  = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<FormRegistrationClient />} />
            <Route path="/cadastrorestaurante" element={<FormRegistrationRestaurent />} />
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