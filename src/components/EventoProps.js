import Button from './Button'

function EventoProps({ numero }){

    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }

    //Vai ser impresso no console o texto dos botões

    return(
        <div className="card">
            <h1>EventoProps</h1>
            <p>Um componente filho pode ativar o método do seu anscestral, relacionando um evento com o Props.</p>
            <Button event={meuEvento} text='Primeiro Evento'/>
            <Button event={segundoEvento} text='Segundo Evento'/>
            <p className='mt-2'>PS: Confira o resultado a partir do console</p>
        </div>
    )
}

export default EventoProps