import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


function onLogout() {
    throw new Error('Função não implementada.');
}

const Dashboard: React.FC = () => {
    const usuario = useSelector((state: RootState) => state?.email);

    return (
        <div>
            <h1>Dados do usuario</h1>
        </div>
    );
};

export default Dashboard;