import { PropTypes } from "prop-types"

function Item({marca, lancamento}){
    return (
        <>
            <li className="list-group-item">
                {marca} - {lancamento}
            </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Marca Vazia',
    lancamento: 0,
}

export default Item