const Filtro = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className='filter-options'>
                <div>
                    <p>Status:</p>
                    <select value={filter.status} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompleted">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética</p>
                    <button onClick={() => setSort('Asc')} >Asc</button>
                    <button onClick={() => setSort('Desc')} >Desc</button>
                </div>
            </div>
        </div>
    );
}

export default Filtro;