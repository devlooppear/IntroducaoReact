import Item from './Item'

function List(){
    return(
        <div className="card">
            <h1 className='mt-3'>Fragmentos (Fragments React)</h1>
            <p>É possível usar fargmentos, tags inespecíficas, em exemplos como uma lista que você quer retornar, mas que não quer criar, por exemplo, uma nova div</p>
            <ul className='list-group mx-3'>
                <Item marca='Ferrari' lancamento={1985}/>
                <Item marca='Fiat' lancamento={1964}/>
                <Item marca='Renault' lancamento={1999}/>
            </ul>
            <div className='mt-3'></div>
        </div>
    )
}

export default List