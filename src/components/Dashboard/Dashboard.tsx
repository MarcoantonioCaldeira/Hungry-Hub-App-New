import React, { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { logout } from "../../reducers/userActions";
import { Link, useNavigate } from "react-router-dom";
import './style/style.scss'

import LogoImg from '../../assets/img/Logo.png'
import { Logo } from "../../design-systems/Images";
import { Menu } from "../../design-systems/Components";
import { MenuHamburger } from "../Menu/MenuHamburger";
import { ButtonLogin } from "../../design-systems/Buttons";
import PerfilDropdown from "./Perfil";

const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state.usuario);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myComponent = useRef(null)
    const myComponentInitial = useRef(null)

    const ScrollMenu = (ref: MutableRefObject<any>): void => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const [OpenMenu, setOpenMenu] = useState(false);
  
    const toggleMenu = () => {
        setOpenMenu(!OpenMenu)
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    };
  
  
    return (
        <>

        <Menu className="Home" ref={myComponentInitial}>
            
            <div className='Vertical_Menu'>
                {/* <div className='Um'>
                    <ButtonLogin onClick={handleLogout}><Link>Logout</Link></ButtonLogin> 
                </div> */}
                 <PerfilDropdown />
                
                <div className='Teste-btn'>
                    <Logo>
                        <img className='Logo' src={LogoImg}/>
                    </Logo>
                    <input type="text"  className="InputSearch" placeholder="Pesquise por alimento ou nome restautante" />

                </div>
                
            </div>

            <MenuHamburger menuAberto={OpenMenu}>

                <div className="icone-hamburguer" onClick={toggleMenu}>
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div className="linha"></div>
                </div>

                <ul className="itens-menu">
                    <button onClick={handleLogout}>Logout</button> 
                    <input type="text" placeholder="Pesquise por alimento ou nome restautante" />
                </ul>
                 
            </MenuHamburger>

        </Menu>
        

          <div>
            <h1>Seja Bem-Vindo</h1>
            <p>Nome: {usuario?.nome}</p>   
            <p>Email: {usuario?.email}</p>  
            <h2>O que separamos para você</h2>
          </div>

        </>
      
    );
};

export default Dashboard;

