import styles from './PagesCss/Geral.module.css'

function Blogs(){
    return (
    <div className={`${styles.geral}`}>
        <div className='card'>
            <h1>Artigos Blog</h1>
            <p className='mt-3'>Este é um exemplo de página de Artigos de um Blog.</p>
            <p>Esta página foi criada apenas para ilustrar o uso do React Router.</p>
            <p>
            Clique em 'IntroReact', na barra de navegação para voltar.
            </p>
        
            <div className="mt-3"></div>
        </div>
    </div>
    );
};
  
export default Blogs;