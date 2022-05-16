import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { FaCartArrowDown } from "react-icons/fa";
import './ItemCart.css'

const ItemCart = ({ id, name, price, quantity }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <>
            <div className='prodCart'>
                <p>{name}</p>
                <p>{quantity}</p>
                <p className='priceProd'>${price}</p>
                <p className='subTotalProd'><span>${quantity * price}</span></p>
                <button className="removeButton" onClick={() => removeItem(id)}><FaCartArrowDown/></button>      
            </div>
        </>
    )
}

export default ItemCart