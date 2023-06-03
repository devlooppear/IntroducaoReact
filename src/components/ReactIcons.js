import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function ReactIcons(){
    return (
        <div className="card">
            <h1>React Icons</h1>
            <p>React Icons é uma biblioteca popular no ecossistema do React que fornece um conjunto abrangente de ícones prontos para uso em aplicativos React. Ela permite que os desenvolvedores incorporem facilmente ícones em seus projetos sem a necessidade de criar ou importar imagens separadas.</p>
            <p>A biblioteca React Icons oferece suporte a uma ampla variedade de conjuntos de ícones populares, como Font Awesome, Material Design Icons, Feather Icons, Ionicons e muitos outros. Ela permite que os desenvolvedores escolham entre vários estilos de ícones, desde ícones de contorno simples até ícones preenchidos ou em estilo de logotipo.</p>
            <p>Exemplos:</p>
            <ul className='list-group mx-5'>
                <li className="list-group-item"><FaFacebook/></li>
                <li className="list-group-item"><FaInstagram/></li>
                <li className="list-group-item"><FaLinkedin/></li>
            </ul>
            <div className='mt-2'></div>
        </div>
    )
}

export default ReactIcons