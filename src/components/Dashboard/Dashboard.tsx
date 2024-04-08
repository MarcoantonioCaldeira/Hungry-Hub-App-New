import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { logout } from "../../reducers/userActions";
import { Link, useNavigate } from "react-router-dom";
import './style/style.scss'
import LogoImg from '../../assets/img/Logo.png'
import { Logo } from "../../design-systems/Images";
import { Menu } from "../../design-systems/Components";
import { MenuHamburger } from "../Menu/MenuHamburger";
import DropdownProfile from "./DropdownProfile";
import ItemRestaurant from "./ItemRestaurant";
import axios from "axios";


const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state.usuario);
    const [restaurantes, setRestaurantes] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const myComponent = useRef(null)
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


    useEffect(() => {
        const fetchRestaurantes = async () => {
            try {
                const URL_API = 'http://localhost:5050'
                const response = await axios.get(URL_API + '/rest/restaurante/listar');
                
                if (response.status === 200) {
                    setRestaurantes(response.data);
                } else {
                    throw new Error("Erro ao obter os dados dos restaurantes");
                }
            } catch (error) {
                console.error(error);
                alert("Não foi possível obter os dados dos restaurantes. Tente novamente mais tarde.");
            }
        };

        fetchRestaurantes();
    }, []); // Executar uma vez quando o componente é montado
  
  
    return (
        <>

        <Menu className="Home" ref={myComponentInitial}>
            
            <div className='Vertical_Menu'>
                
                <div className='Um'>
                    <DropdownProfile onLogout={handleLogout} />
                </div>
                         
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
            <h1>Seja Bem-Vindo {usuario?.nome}</h1>
            <h2>O que separamos para você</h2>
            {restaurantes.map((restaurante: any) => (
                <ItemRestaurant key={restaurante.id} restaurante={restaurante} />
            ))}
          </div>

        </>
      
    );
};

export default Dashboard;

