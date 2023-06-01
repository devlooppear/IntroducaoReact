import React, { useState } from 'react';

function ChildComponent({ name }) {
  return (
    <div>
      <p className='mt-3'>Seu nome é: {name}</p>
    </div>
  );
}

function StateLift() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="card">
      <h1>State Lift</h1>
      <p>
        No React, o termo "State Lift" (elevação do estado) refere-se a uma técnica em que o estado é movido de um componente filho para um componente pai para compartilhamento e gerenciamento centralizado.
      </p>
      <p>
        O State Lift é usado quando vários componentes precisam acessar e atualizar o mesmo estado. Em vez de manter esse estado em um componente filho e passá-lo entre os componentes através de props, o estado é movido para o componente pai mais próximo que engloba todos os componentes que precisam acessá-lo.
      </p>
      <div className='mx-5'>
        <label htmlFor="nameInput">Qual é o seu nome? </label><br></br>
        <input className='form-control mt-3' id="nameInput" type="text" value={name} onChange={handleChange} />
      </div>
      <ChildComponent name={name} />
    </div>
  );
}

export default StateLift;
