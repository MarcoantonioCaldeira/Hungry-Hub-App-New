import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from '../components/Login/Login';
import FormRegistrationClient from '../components/CostumerRegistration/FormRegistrationClient';
import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Dashboard';
import MyProfile from "../components/Dashboard/MyProfile";


const RoutesComponent  = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<FormRegistrationClient />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/myprofile' element={<MyProfile />} />
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