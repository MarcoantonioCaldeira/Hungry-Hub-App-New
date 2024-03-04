import React from "react";
import { useSelector } from "react-redux";
import { UserState } from "../../reducers/userReducer";


function onLogout() {
    throw new Error('Função não implementada.');
}

interface RootState {
    usuario: UserState; 
}

const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state.usuario); 


    return (
        <div>
            <h1>Dados do usuário</h1>
            <p>Nome: {usuario?.nome}</p>
            <p>Email: {usuario?.email}</p>
        </div>
    );
};

export default Dashboard;