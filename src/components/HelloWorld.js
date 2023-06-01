import Frase from './Frase'

function HelloWorld() {

    const msg = 'Hello, World'

    return (
        <div>
            <div className="card">
                <h1>Este é um exemplo de componente:</h1>
                <p className="mt-2">Está é uma mensagem: {msg}</p>
                <Frase/>
            </div>
        </div>
    )

}

export default HelloWorld