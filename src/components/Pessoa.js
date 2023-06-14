import styles from './pages/PagesCss/CardImagem.module.css'

function Pessoa(props){
    return (
        <div className={`${styles.imagens} card`}>
            <h1>Outro exemplo de uso de Props, mas com mais elementos:</h1>
            <img src={props.foto} alt="foto pessoa"></img>
            <p><strong>Nome:</strong> {props.nome}</p>
            <p><strong>Idade:</strong> {props.idade}</p>
            <p><strong>Profissão:</strong> {props.profissao}</p>
        </div>
    )
}

export default Pessoa