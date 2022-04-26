const ItemCart = ({id, name, price, quantity}) => {
    return(
        <li key={prod.id}>{prod.name} cantidad: {prod.quantity} precio uni: {prod.price} subtotal: {prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>Sacar Producto</button></li>
    )

}