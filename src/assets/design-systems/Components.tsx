import styled from "styled-components";
import { theme } from "./Colors";
import ImageDelivery from '../assets/img/img_entregador.jpg'
import ImageRestaurant from '../assets/img/img_restaurante.jpg'


export const Menu = styled.div`
    width: 100%;
    height: 200px;
`;

export const Template = styled.div`
    width: 97%;
    height: auto;
    background-color: #D9D9D9;
    border-radius: 12px;
`;

export const WeSolutions = styled.div`
    width: 100%;
    height: 600px;
`;

export const SolutionRestaurant = styled.div`
    width: 400px;
    display: inline-block;
    height: 200px;
    background-image: linear-gradient(#F5393A, #F5A7A8);
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        width: 97%;
    }
`;

export const SolutionLanch = styled.div`
    width: 400px;
    display: inline-block;
    height: 200px;
    background-image: linear-gradient(#F5393A, #F5A7A8);
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        width: 97%;
    }
`;


export const RegisterArea = styled.div`
    
    height: 1200px;
    @media screen and (max-width: 600px) {
        height: 900px;
    }
`;

export const RegisterAreaDeliveryMan = styled.div`
    width: 400px;
    height: 650px;
    background-color: #D9D9D9;
    border-radius: 10px;
`;


export const RegisterAreaRestaurant = styled.div`
    width: 400px;
    height: 650px;
    background-color: #D9D9D9;
    border-radius: 10px;
`;



