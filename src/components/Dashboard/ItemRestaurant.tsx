import React from "react";
import axios from "axios";

interface RestaurantProps {
    restaurante: {
        id: number;
        nome_restaurante: string;
        nome_proprietario: string;
        especialidade: string;
    };
}

const ItemRestaurant: React.FC<RestaurantProps> = ({ restaurante }) => {
    const handleRestaurantDetails = async () => {
        try {
            const URL_API = 'http://localhost:5050';
            const response = await axios.get(`${URL_API}/rest/restaurante/${restaurante.id}`);
            if (response.status === 200) {
                console.log(response.data);
                // Aqui você pode fazer algo com os detalhes do restaurante, como exibir em um modal
            } else {
                throw new Error("Erro ao obter detalhes do restaurante");
            }
        } catch (error) {
            console.error(error);
            alert("Não foi possível obter os detalhes do restaurante. Tente novamente mais tarde.");
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h2>{restaurante.nome_restaurante}</h2>
            <p>Proprietário: {restaurante.nome_proprietario}</p>
            <p>Especialidade: {restaurante.especialidade}</p>
            <button onClick={handleRestaurantDetails}>Ver Detalhes</button>
        </div>
    );
};

export default ItemRestaurant

