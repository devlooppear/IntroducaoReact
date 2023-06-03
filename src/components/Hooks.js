function Hooks(){
    return(
        <div className="card">
            <h1>Hooks</h1>
            <div className="mx-5">
                <p className="mt-2">Os Hooks fornecem uma maneira mais simples e direta de escrever componentes funcionais complexos no React. Antes dos Hooks, para compartilhar estado entre componentes ou adicionar lógica de ciclo de vida, você precisava usar classes. Com os Hooks, você pode fazer isso em componentes funcionais, tornando o código mais conciso e fácil de entender.</p>
                <p className="mt-2">Os Hooks mais comumente usados são:</p>
                <p className="mt-2"><strong>useState:</strong> Permite adicionar estado a um componente funcional. Você pode declarar uma variável de estado e uma função para atualizá-la, e o React se encarrega de rastrear e atualizar o estado automaticamente quando necessário.</p>
                <p className="mt-2"><strong>useEffect:</strong> Permite executar efeitos colaterais em componentes funcionais. Você pode realizar ações como buscar dados de uma API, assinar eventos, manipular a DOM e muito mais. O useEffect é executado após a renderização do componente e pode ser configurado para ser executado apenas quando certas dependências mudarem.</p>
                <p className="mt-2"><strong>useContext:</strong> Permite acessar o contexto definido em um componente pai sem precisar passar as props através de todos os níveis intermediários. Isso simplifica o acesso a valores globais em vários componentes.</p>
                <p className="mt-2"><strong>useReducer:</strong> Fornece uma alternativa ao useState para gerenciar estados complexos. O useReducer é útil quando você precisa lidar com lógica de estado mais avançada ou quando o estado depende do estado anterior.</p>
                <p className="mt-2"><strong>useCallback:</strong> Permite memoizar funções, evitando que elas sejam recriadas a cada renderização do componente. Isso é útil quando você precisa passar funções como propriedades para componentes filhos.</p>
                <p className="mt-2"><strong>useMemo:</strong> Permite memoizar valores calculados, evitando que sejam recalculados a cada renderização do componente. Isso é útil quando você tem cálculos custosos em um componente e deseja evitar repetições desnecessárias.</p>
            </div>
            <div className="mt-3"></div>
        </div>
    )
}

export default Hooks