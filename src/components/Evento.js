import React, { useState } from 'react';

function Evento() {
  const [frase, setFrase] = useState('Ativar');
  const [classeBotao, setClasseBotao] = useState('btn btn-success');

  function meuEvento() {
    if (frase === 'Ativar') {
      setFrase('Fui ativado');
      setClasseBotao('btn btn-warning');
    } else if (frase === 'Fui ativado') {
      setFrase('Ativar');
      setClasseBotao('btn btn-success');
    }
  }

  return (
    <div className="card">
      <h1>Eventos</h1>
      <p>Assim como no JavaScript também é possível realizar eventos determinados.</p>
      <p>Clique para disparar um evento:</p>
      <button onClick={meuEvento} className={classeBotao}>{frase}</button>
      <div className='mt-2'></div>
    </div>
  );
}

export default Evento;
