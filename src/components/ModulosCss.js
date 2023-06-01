import styles from './ModulosCss.module.css'

function ModulosCss(){
    return (
        <div className={`${styles.EstiloIndividual} card`}>
            <h1 className='mt-3'>Estilização Específica de Módulos</h1>
            <p>Também é possível tem uma estilização específica de módulos, para isso, é utilizado o tipode arquivo .module.css, importando depois como uma váriavel 'styles' que usará as classes de forma semelhante a uma função</p>
        </div>
    )
}

export default ModulosCss