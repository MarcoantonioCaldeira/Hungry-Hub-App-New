import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClienteLogado = ({ id }) => {
  const [cliente, setCliente] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCliente, setEditedCliente] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL_API = 'http://localhost:5050';
        const response = await axios.get(`${URL_API}/rest/cliente/get/${id}`);
        setCliente(response.data.object);
      } catch (error) {
        console.error("Erro ao pegar os dados do cliente", error);
      }
    }

    fetchData();
  }, [id]);

  const EditarDados = () => {
    setIsEditing(true);
    setEditedCliente({ ...cliente });
  };

  // const AtualizarDados = async () => {
  //   try {
  //     const URL_API = 'http://localhost:5050';

  //     const dadosAtualizados = {
  //       id: cliente.id,
  //       nome: editedCliente.nome,
  //       email: editedCliente.email,
  //       telefone: "18998113253",
  //       senha: "senha13243",
  //       confirmarSenha: "senha13243"
  //     };

  //     const resposta = await axios.put(`${URL_API}/rest/cliente/update/${id}`, dadosAtualizados);
  //     setIsEditing(false);
  //     //setIsEditing(resposta.data.object)
  //   } catch (error) {
  //     console.error('Erro ao atualizar os dados do cliente', error);
  //   }
  // }

  return (
    <div>
      <h2>Dados do Cliente Logado</h2>
      {cliente ? ( // Verifica se o cliente não é nulo
        isEditing ? (
          <div>
            <input type='text' value={editedCliente.nome} onChange={(e) => setEditedCliente({ ...editedCliente, nome: e.target.value })} />
            <input type='text' value={editedCliente.email} onChange={(e) => setEditedCliente({ ...editedCliente, email: e.target.value })} />
            <button onClick={AtualizarDados}>Salvar</button>
          </div>
        ) : (
          <div>
            <p>Nome: {cliente.nome}</p>
            <p>Email: {cliente.email}</p>
            <button onClick={EditarDados}>Editar</button>
          </div>
        )
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ClienteLogado;