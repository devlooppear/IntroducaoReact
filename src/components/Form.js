import { useState } from 'react'

function Form(){

    function CadastroUser(event){
        event.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    //Os useState são usados para uma alteração atrelada a uma váriavel. São declarados como constantes, em uma array, contendo o nome da váriavel e depois o valor que vai se alterar, como abaixo.

    const [name, setName] = useState()
    
    //nao precisa, mas você pode ter um valor previamente definido como o useState('NameDefault') e definir um value para isso.
    const [password, setPassword] = useState()

    return (
    <div className="card">
        <h1 className="mt-3">Formulário React</h1>
        <h3>Meu Cadastro:</h3>
        <form onSubmit={CadastroUser}>
            <div className="mt-2 mx-5">
                <label htmlFor="name" className="form-label">Nome:</label>
                <input 
                type='text' 
                id='name' 
                name='name' 
                className="form-control" 
                rows="1" 
                placeholder="Digite seu nome"
                onChange={(event) => setName(event.target.value)}>
                </input>
            </div>
            <div className="mt-2 mx-5">
                <label htmlFor="name" className="form-label">Senha:</label>
                <input 
                type='password' 
                id='password'
                name='password' 
                className="form-control" 
                rows="1" 
                placeholder="Digite sua senha"
                onChange={(event) => setPassword(event.target.value)}>
                </input>
            </div>
            <div className="mt-2 mx-5">
                <input type='submit' className="btn btn-outline-success" value='Cadastrar'></input>
            </div>
            <div className="mt-3"></div>
        </form>
    </div>
    )
}

export default Form