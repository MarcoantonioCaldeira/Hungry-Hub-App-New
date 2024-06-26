import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Importa o ícone de perfil
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../reducers/userActions';
import './style/style_profile.scss'

const DropdownProfile  = () => {

  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setMostrarDropdown(!mostrarDropdown);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };

  const handleProfile = () => {
    navigate('/myprofile')
  };

  return (
    <div className="perfil-dropdown">
      <div className="perfil" onClick={toggleDropdown}>
        <FaUser />
      </div>
      {mostrarDropdown && (
        <div className="dropdown-content">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleProfile}>Meus Dados</button> 
          {/* Adicione outras opções de conta aqui, se necessário */}
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
