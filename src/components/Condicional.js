import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function EnviarEmail(event){
        event.preventDefault()
        setUserEmail(email)
    }

    function LimparEmail(){
        setUserEmail('')
    }

    return (
        <div className="card">
            <h1 className="mt-3">Renderização Condicional</h1>
            <p className="mx-5">
                A renderização condicional no React é uma técnica utilizada para controlar quais elementos ou componentes devem ser renderizados com base em determinadas condições. Ela permite que você tome decisões sobre o que será exibido na interface do usuário com base em variáveis, propriedades ou estado do componente.</p>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu e-mail..."
                onChange={(event) => setEmail(event.target.value)}
                ></input><br></br>
                <button
                type="submit"
                onClick={EnviarEmail}
                >Enviar E-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={LimparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional