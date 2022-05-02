import { useContext } from "react";
import CartContext from "../../Context/CartContext";


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Precio por unidad: ${price}</p>
            <p>Subtotal: ${price * quantity}</p>
            <button onClick={() => handleRemove(id)}>X</button>
        </div>
    )

}

export default CartItem