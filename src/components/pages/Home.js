import imagem from '../../img/aprendendo.png'
import styles from './PagesCss/Home.module.css'
import style from './PagesCss/Geral.module.css'

function Home() {
    return (
        <div className={`${style.geral}`}>
            <div className={`${styles.home_page} card`}>
                <h1>Intro React</h1>
                <h3 className='mt-2'>Home</h3>
                <p className='mt-3'>Este é um exemplo de página de Home.</p>
                <img src={imagem} alt='cadernim'></img>
                <p className='mt-3'>Clique em 'IntroReact', na barra de navegação para voltar..</p>
                <div className="mt-3"></div>
            </div>
        </div>
    )
}

export default Home