import React, { useState } from 'react';

function UseStates() {
  function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <div className="counter">
        <h2>Contador</h2>
        <p>Valor: {count}</p>
        <button className='btn btn-outline-success' onClick={increment}>Incrementar</button><br></br>
        <button className='btn btn-outline-primary' onClick={decrement}>Decrementar</button>
      </div>
    );
  }

  return (
    <div className="card">
      <h1>UseStates</h1>
      <p>
        O useState é um recurso do React, uma biblioteca JavaScript amplamente utilizada para construir interfaces de usuário interativas. O useState é uma função que permite adicionar e gerenciar o estado em componentes funcionais.
      </p>
      <p>
        O estado representa a informação que pode mudar ao longo do tempo e afetar a renderização do componente. Com o useState, é possível criar variáveis de estado dentro de um componente e atualizá-las quando necessário.
      </p>
      <Counter/>
    </div>
  );
}

export default UseStates;
