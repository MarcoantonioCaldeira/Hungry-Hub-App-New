import React, { MutableRefObject, useRef, useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Footer  from '../Footer/Footer';
import { 
      ButtonStyledMenuTwo, 
      ButtonStyledMenu, 
      ButtonCarrers 
} from '../../design-systems/Buttons.tsx';
import { 
      Template, 
      Menu, 
      WeSolutions, 
      RegisterArea, 
      RegisterAreaRestaurant,
      SolutionRestaurant,
      SolutionLanch,
} from '../../design-systems/Components.tsx'
import  { Logo } from '../../design-systems/Images.tsx'
import {Font, FontRestaurante} from '../../design-systems/Fonts.tsx'
import ImageTamplate from '../../assets/img/image-painel.jpg'
import ImageDelivery from '../../assets/img/img_restaurante.jpg'
import LogoImg from '../../assets/img/Logo.png'
import { MenuHamburger } from '../../components/Menu/MenuHamburger.tsx';


const Home = () =>{

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



  return (
    <>
      <Menu className="Home" ref={myComponentInitial}>   
        
        <div  className='Vertical_Menu'>
          <div className='Um'>
            <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Login</Link></ButtonStyledMenuTwo>
            <ButtonStyledMenu className='btn-register'><Link to="/cadastro">Faça o seu pedido</Link></ButtonStyledMenu>   
          </div>

          <div> 
            <Logo>
                <img className='Logo' src={LogoImg}/>
            </Logo>
            
            <div className='Teste-btn'>
              <ButtonStyledMenuTwo className='btn-menu' onClick={() => ScrollMenu(myComponentInitial)}><Link to="#">Inicio</Link></ButtonStyledMenuTwo>
              <ButtonStyledMenuTwo className='btn-menu' onClick={() => ScrollMenu(myComponent)}><Link to="#">Aumente suas Vendas</Link></ButtonStyledMenuTwo> 
            </div>
          
          </div>
          
        </div>

        <MenuHamburger menuAberto={OpenMenu}>
            <div className="icone-hamburguer" onClick={toggleMenu}>
              <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
              </div>

            <ul className="itens-menu">
              <ButtonStyledMenuTwo className='btn-menu' onClick={() => ScrollMenu(myComponentInitial)}><Link to="#">Inicio</Link></ButtonStyledMenuTwo>
              <ButtonStyledMenuTwo className='btn-menu' onClick={() => ScrollMenu(myComponent)}><Link to="#">Aumente suas Vendas</Link></ButtonStyledMenuTwo> 
            </ul>
        </MenuHamburger>
      </Menu>


      <div className='Template_Area'>
        <Template className="Template">
          <img src={ImageTamplate} className='ImageTemplate'/>
        </Template>
      </div>
      
      
      <RegisterArea ref={myComponent}  className='Area-Registrations'>

        <Font>Quer ser o nosso parceiro?</Font>

        <div className='Area-Sub-Registrations'>

            <RegisterAreaRestaurant className='CadastroRestaurante'>
              <img src={ImageDelivery} className='ImageDelivery'/>
            
              <div className='CadastroRestaurante2'>
                  <FontRestaurante className='font_restaurante'>Cadastre o seu Restaurante</FontRestaurante>
                  <div>
                    <ButtonCarrers className='btn_saiba'>Saiba mais</ButtonCarrers>
                  </div>
                  
              </div>
        
            </RegisterAreaRestaurant>

        </div>

      
      </RegisterArea>
      <Footer />
    </>
    
  );
}

export default Home;