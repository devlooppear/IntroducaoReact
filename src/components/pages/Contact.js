import styles from './PagesCss/Geral.module.css'

function Contact(){
    return(
    <div className={`${styles.geral}`}>
        <div className='card'>
            <h1>Contatos</h1>
            <p className='mt-3'>Esse é um exemplo de página de contatos.</p>
            <p>
            Esta página foi criada apenas para ilustrar o uso do React Router.
            </p>
            <p>
            Clique em 'IntroReact', na barra de navegação para voltar.
            </p>
            <div className="mt-3"></div>
        </div>
    </div>
    )
  };
  
  export default Contact;