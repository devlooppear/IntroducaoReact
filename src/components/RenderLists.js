function RenderLists({ itens }){
    return(
        <div className="card">
            <h1>Renderização de Listas</h1>
            <p>
            No React, a renderização de listas é uma técnica comum para exibir uma coleção de elementos de forma dinâmica. O componente RenderLists mencionado no código parece ser um exemplo dessa renderização de listas.
            </p>
            <p>
            Ao renderizar uma lista no React, é comum usar um loop para percorrer a coleção de elementos e criar um componente para cada item. Isso permite que a lista seja renderizada de forma flexível, adaptando-se ao número de elementos presentes.
            </p>
            <ul className="list-group mx-3">
                {itens.map((item, index) => (
                <li className="list-group-item" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderLists