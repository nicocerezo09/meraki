import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <ul>
            {products.map(prod => <item key={prod.id} {...prod}/>)}
        </ul>
    )
}

export default ItemList