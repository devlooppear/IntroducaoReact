import styles from './pages/PagesCss/CardImagem.module.css'

function PessoaEstructure({nome, idade, foto, profissao}){
    return (
        <div className={`${styles.imagens} card`}>
            <h1>Este é um exemplo de Estructure, sem a necessidade de props:</h1>
            <img src={foto} alt="foto pessoa"></img>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Idade:</strong> {idade}</p>
            <p><strong>Profissão:</strong> {profissao}</p>
        </div>
    )
}

export default PessoaEstructure