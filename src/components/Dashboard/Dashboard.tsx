import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";



const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state.user); 
   
    if (!usuario) {
        return <div>Carregando...</div>; // Ou qualquer outra lógica de carregamento que você preferir
    }
    
    return (
        <div>
            <h1>Dados do usuário</h1>
            <p>Email: {usuario.email}</p>         
        </div>
    );
};

export default Dashboard;