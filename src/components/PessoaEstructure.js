function PessoaEstructure({nome, idade, foto, profissao}){
    return (
        <div className="card">
            <h1>Este é um exemplo de Estructure, sem a necessidade de props:</h1>
            <img src={foto} alt="foto pessoa"></img>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Idade:</strong> {idade}</p>
            <p><strong>Profissão:</strong> {profissao}</p>
        </div>
    )
}

export default PessoaEstructure