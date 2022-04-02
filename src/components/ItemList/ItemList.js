import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <ul>
            {products.map(prods => <Item key={prods.id} {...prods}/>)}
        </ul>
    )
}

export default ItemList