import './App.css';
import './bootstrap/css/bootstrap.css'
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa'
import PessoaEstructure from './components/PessoaEstructure';
import ModulosCss from './components/ModulosCss';
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import EventoProps from './components/EventoProps'
import Condicional from './components/Condicional'
import RenderLists from './components/RenderLists.js';
import StateLift from './components/StateLift.js';
import UseStates from './components/UseStates.js';

function App() {

  //Lembrando que é necessário um elemento pai no React, como uma <div>, por exemplo, para que englobe as outras tags.

  const meusItens = ['React', 'Vue', 'Angular']

  function operacao(n1=0, n2=0){
    const media = (n1 + n2)/2
    return media
  }

  const name = 'Matheus'
  const n1 = 5
  const n2 = 3

  const url = 'https://cdn.pixabay.com/photo/2015/09/25/21/30/dogs-958216_1280.jpg'

  return (
    <div className="App">
      <div className="card">
        <h1 className='mt-1'>Olá, React!</h1>
        <p>Essa é uma introdução ao React</p>
        <p>Se eu escrever: Olá, [ valor de name (variável definida dentro do componente 'App') ], eu posso exibir para o usuário o valor da variável [ name ].<br></br>
        Com isso é possível criar recursos de JavaScript como [ valor de name em caixa alta ] ou [ valor de name em caixa baixa ]</p>
        <p>Como no seguinte output: Olá, {name}, eu posso exibir para o usuário um nome</p>
        <p>Com isso é possível criar recursos de JavaScript como {name.toLocaleUpperCase()} ou {name.toLocaleLowerCase()}</p>
        <p>Também coisas como Operações Matemáticas, como com {n1} e {n2}</p>
        <pre>
          <p>
            {n1} + {n2} = {n1 + n2}<br></br>
            {n1} - {n2} = {n1 - n2}<br></br>
            {n1} / {n2} = {n1 / n2}<br></br>
            {n1} % {n2} = {n1 % n2}<br></br>
            {n1} ** {n2} = {n1 ** n2}<br></br>
          </p>
        </pre>
        <p>Também é possível fazer funções como na média de {n1} e {n2}, que é {operacao(n1, n2)}</p>
        <p>Para colocar imagens, tem que instancia-las como uma váriavel</p>
        <img src={url} alt="um cachorro"></img>
        <div className='mt-2'></div>
      </div>
      <HelloWorld/>
      <SayMyName nome= 'Walter White'/>
      <Pessoa nome='Rodrigo' idade='28' profissao='programador' foto='https://images.pexels.com/photos/3778673/pexels-photo-3778673.jpeg'/>
      <PessoaEstructure 
      nome='Walter White' 
      idade='41' 
      profissao='professor de química' 
      foto='https://upload.wikimedia.org/wikipedia/commons/3/3f/Bryan_Cranston_2012.jpg'/>
      <ModulosCss/>
      <List/>
      <Evento/>
      <Form/>
      <EventoProps numero='1'/>
      <Condicional/>
      <RenderLists itens={meusItens}/>
      <StateLift/>
      <UseStates/>
    </div>
  );
}

export default App;
