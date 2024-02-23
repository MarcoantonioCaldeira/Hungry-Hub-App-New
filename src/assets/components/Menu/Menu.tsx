import styled from 'styled-components';


export const MenuHamburguer =  styled.div`
  display: none; 

  @media screen and (max-width: 600px) {

    display:block;

    .menu-hamburguer {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 10px;
    }

    .linha {
      width: 25px;
      height: 3px;
      background-color: #658C3B;
      border-radius: 15px;
      margin: 5px 0;
    }

    .itens-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    .itens-menu li {
      margin-right: 20px;
    }

    .icone-hamburguer {
      display: block;
      float: right;
      cursor: pointer;
      transition: 1s ease all;
    }

    .itens-menu {
      list-style: none;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      width: 250px;
      height: 100%;
      padding: 0;
      margin: 0;
      display: ${({ menuAberto }) => (menuAberto ? 'flex' : 'none')};
      flex-direction: column;  
      position: fixed;
      top: 0;
      left: 0;
      background-color: white;
      padding: 10px;
      border: 1px solid #ccc;
      transition: 1s ease all; 
    }

    .itens-menu li {
      margin-right: 20px;
    }

  }


`