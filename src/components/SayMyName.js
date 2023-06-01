function SayMyName(props){
    return (
        <div className="card">
            <p className="mt-3">Este é um exemplo do uso de Props, onde é possível estabelecer variáveis de forma dinâmica.</p>
            <p>Fala aí {props.nome}! Suave?</p>
        </div>
    )
}

export default SayMyName