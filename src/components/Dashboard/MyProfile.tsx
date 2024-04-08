import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../reducers/rootReducer';



const MyProfile = () => {
    const usuario = useSelector((state: RootState) => state.usuario);
    const navigate = useNavigate();

    const handleProfile = () => {
      navigate('/dashboard')
    };
  
    return (
      <div className="perfil-dropdown">
        <h2>Meus Dados</h2>

        <div>
            <p>Nome: {usuario?.nome}</p>   
            <p>Email: {usuario?.email}</p>  
        </div>

        <button onClick={handleProfile}>Retornar</button>
      </div>
    );
  };


  export default MyProfile;