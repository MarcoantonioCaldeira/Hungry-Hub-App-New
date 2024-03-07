import styled from "styled-components";
import { theme } from "./Colors";


//Fontes das frases da tela inicial
export const Font = styled.h2`
    font-family: 'Nunito', sans-serif;
    color: #A8BF91;
`;


export const FontRestaurante = styled.h2`
    font-family: 'Nunito', sans-serif;
    color: ${({ them }) => theme.colors.sixth};
`;


export const FontEntregador = styled.h2`
    font-family: 'Nunito', sans-serif;
    color: ${({ them }) => theme.colors.sixth};
`;


export const FontLogin = styled.h2`
    font-family: 'Nunito', sans-serif;
    color: ${({ them }) => theme.colors.seven};
`;