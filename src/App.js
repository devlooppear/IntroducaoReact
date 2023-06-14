import React from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa';
import PessoaEstructure from './components/PessoaEstructure';
import ModulosCss from './components/ModulosCss';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import EventoProps from './components/EventoProps';
import Condicional from './components/Condicional';
import RenderLists from './components/RenderLists.js';
import StateLift from './components/StateLift.js';
import UseStates from './components/UseStates.js';
import ReactRouter from './components/ReactRouter';
import ReactIcons from './components/ReactIcons';
import Hooks from './components/Hooks';
import { useState } from 'react';
import styles from './components/pages/PagesCss/CardImagem.module.css'
import style from './components/pages/PagesCss/Geral.module.css'

function App() {
  const meusItens = ['React', 'Vue', 'Angular'];

  function operacao(n1 = 0, n2 = 0) {
    const media = (n1 + n2) / 2;
    return media;
  }

  const [name, setName] = useState('João');
  const [n1, setN1] = useState(5);
  const [n2, setN2] = useState(3);
  

  const url =
    'https://cdn.pixabay.com/photo/2015/09/25/21/30/dogs-958216_1280.jpg';

  return (
    <div className='App'>
      <div className={`${styles.imagens} card ${style.geral}`}>
        <div className='mx-3'>
          <h1 className="mt-1">Olá, React!</h1>
          <p>Essa é uma introdução ao React</p>
          <p>O React é uma biblioteca JavaScript popular e poderosa para a construção de interfaces de usuário interativas e reativas. Nesta demonstração, vamos explorar alguns conceitos fundamentais do React e mostrar como criar componentes reutilizáveis e interativos.</p>
          <p>
            Se eu escrever: Olá, [name] (sendo 'name' <code>const name = 'João'</code>), eu posso exibir para o usuário o valor da
            variável name, onde seu output, para o usuário será 'Matheus'.
          </p>
          <p>Porém, também é possível alterar esses valores com algo que vamos abordar mais futuramente, o 'useStates'</p>
          <input className='form-control mt-1' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input className='form-control mt-2' type="number" value={n1} onChange={(e) => setN1(Number(e.target.value))} />
          <input className='form-control mt-2' type="number" value={n2} onChange={(e) => setN2(Number(e.target.value))} />
          <p className='mt-3'>
            Com isso é possível criar recursos de JavaScript como{' '}
            {name.toLocaleUpperCase()} (<code>name.toLocaleUpperCase()</code>) ou {name.toLocaleLowerCase()} (<code>name.toLocaleLowerCase()</code>).
          </p>
          <p>
            Também coisas como Operações Matemáticas, como com {n1} (<code>const n1 = 5</code>) e {n2} (<code>const n2 = 3</code>)
          </p>
          <pre>
            <p>
              {n1} + {n2} = {n1 + n2}
              <br />
              {n1} - {n2} = {n1 - n2}
              <br />
              {n1} / {n2} = {n1 / n2}
              <br />
              {n1} % {n2} = {n1 % n2}
              <br />
              {n1} ** {n2} = {n1 ** n2}
              <br />
            </p>
          </pre>
          <p>Também é possível fazer funções como a média de {n1} e {n2}: {operacao(n1, n2)}</p>
          <p>Para colocar imagens, é necessário instanciá-las como uma variável</p>
          <img src={url} alt="um cachorro" />
          <div className="mt-2"></div>
        </div>
      </div>
      <HelloWorld />
      <SayMyName nome="Walter White" />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="programador"
        foto="https://images.pexels.com/photos/3778673/pexels-photo-3778673.jpeg"
      />
      <PessoaEstructure
        nome="Walter White"
        idade="41"
        profissao="professor de química"
        foto="https://upload.wikimedia.org/wikipedia/commons/3/3f/Bryan_Cranston_2012.jpg"
      />
      <ModulosCss />
      <List />
      <Evento />
      <Form />
      <EventoProps numero="1" />
      <Condicional />
      <RenderLists itens={meusItens} />
      <StateLift />
      <UseStates />
      <ReactRouter />
      <ReactIcons />
      <Hooks/>
      <div className='card'>
        <h1>Conclusão</h1>
        <div className="mx-3">
          <p className='mt-2'>
          Neste projeto, exploramos diferentes conceitos e recursos do React para criar uma aplicação interativa. Começamos aprendendo os fundamentos do React, como criar componentes, usar propriedades e estado, e gerenciar eventos.
          </p>
          <p>
          Ao longo do projeto, abordamos tópicos como renderização condicional, listas dinâmicas, formulários, e até mesmo integração com rotas utilizando o React Router. Também exploramos o uso de bibliotecas externas, como o React Icons, para adicionar ícones à nossa aplicação.
          </p>
          <p>
          Além disso, vimos como os Hooks podem melhorar a forma como escrevemos e organizamos o nosso código, permitindo-nos utilizar o estado e outros recursos do React em componentes funcionais.
          </p>
          <p>
          Com este projeto, você adquiriu conhecimentos essenciais para começar a desenvolver aplicações web usando o React. Continue explorando a documentação oficial do React e pratique a criação de novos projetos para aprimorar ainda mais suas habilidades.
          </p>
          <p>
          Espero que você tenha gostado desta introdução ao React e esteja empolgado para continuar aprendendo e criando coisas incríveis com essa poderosa biblioteca!
          </p>
        </div>
        <div className='mt-2'></div>
      </div>
    </div>
  );
}

export default App;
