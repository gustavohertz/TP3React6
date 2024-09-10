import { useState } from 'react';
import './App.css';
 

function Perfil({ usuario }) {
  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Endereço:</strong> {usuario.endereco}</p>
    </div>
  );
}
function App() {

  const usuario = {
    nome: 'Gustavo Hertz',
    email: 'gustavo.hertz@al.infnet.edu.br',
    endereco: 'Rua são josé',
  };
    return (
      <>
        <div>
          <p>Nome: {usuario.nome}</p>
          <p>Email: {usuario.email}</p>
          <p>Endereço: {usuario.endereco}</p>
        </div>
      </>
    );

       return (
    <div className="App">
      <Perfil usuario={usuario} />
    </div>
  );

  };

 

export default App;