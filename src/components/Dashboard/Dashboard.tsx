import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";



const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state.usuario);
  
    return (
        <div>
            <h1>Seja Bem-Vindo</h1>
            <p>Nome: {usuario?.nome}</p>   
            <p>Email: {usuario?.email}</p>   
        </div>
    );
};

export default Dashboard;

