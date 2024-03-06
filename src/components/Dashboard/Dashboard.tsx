import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { logout } from "../../reducers/userActions";
import { useNavigate } from "react-router-dom";



const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state.usuario);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    };
  
    return (
        <div>
            <h1>Seja Bem-Vindo</h1>
            <p>Nome: {usuario?.nome}</p>   
            <p>Email: {usuario?.email}</p>  
            <button onClick={handleLogout}>Logout</button> 
        </div>
    );
};

export default Dashboard;

