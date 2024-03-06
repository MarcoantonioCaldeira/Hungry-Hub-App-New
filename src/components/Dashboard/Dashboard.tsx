import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";



const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state.usuario);
  
    return (
        <div>
            <h1>Dados do usuário</h1>
            <p>Email: {usuario?.email}</p>   
        </div>
    );
};

export default Dashboard;

