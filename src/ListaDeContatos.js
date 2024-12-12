import React, { useState } from 'react';
import './ListaDeContatos.css'; // Importando o arquivo de CSS

function ListaDeContatos() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [editarIndex, setEditarIndex] = useState(null);

  const adicionarContato = () => {
    if (nome && telefone && email) {
      if (editarIndex !== null) {
        // Editar contato existente
        const novosContatos = [...contatos];
        novosContatos[editarIndex] = { nome, telefone, email };
        setContatos(novosContatos);
        setEditarIndex(null);
      } else {
        // Adicionar novo contato
        setContatos([...contatos, { nome, telefone, email }]);
      }
      setNome('');
      setTelefone('');
      setEmail('');
    }
  };

  const editarContato = (index) => {
    setNome(contatos[index].nome);
    setTelefone(contatos[index].telefone);
    setEmail(contatos[index].email);
    setEditarIndex(index);
  };

  const removerContato = (index) => {
    const novosContatos = contatos.filter((_, i) => i !== index);
    setContatos(novosContatos);
  };

  return (
    <div className="container">
      <h2>Lista de Contatos</h2>
      <div className="form">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <button onClick={adicionarContato}>
          {editarIndex !== null ? 'Editar Contato' : 'Adicionar Contato'}
        </button>
      </div>
      <ul className="contatos-lista">
        {contatos.map((contato, index) => (
          <li key={index} className="contato">
            <strong>{contato.nome}</strong>
            <p>{contato.telefone}</p>
            <p>{contato.email}</p>
            <button onClick={() => editarContato(index)}>Editar</button>
            <button onClick={() => removerContato(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeContatos;
