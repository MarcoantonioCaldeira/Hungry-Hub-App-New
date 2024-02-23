import React from "react";
import { useNavigate } from "react-router-dom";
import LoggedCostumer from "./LoggedCostumer";

const Dashboard = () => {
    const navigate = useNavigate();
    const idDoCliente = 15; // ID do cliente

    const handleLogout = () => {
        navigate('/login');
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <LoggedCostumer id={idDoCliente} />
        </div>
    )
}

export default Dashboard;