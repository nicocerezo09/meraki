import Counter from "../Counter/Counter"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { useNotification } from "../../notification/Notification"
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, img, category, description, price, stock  }) => {
    

    const { addItem, getQuantityProd } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (count) => {
    
        const objProd = {
            id, name, price, quantity: count
        }

        addItem(objProd)

        setNotification('success', `Se agregaron ${count} ${name} correctamente`)
        
    }


    // const handleSelect = (text) => {
    //     console.log(`el color seleccionado es ${text}`)
    // }
    
    return (
        <div className="col">
        <div className="card mt-2">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria: {category}</p>
            <p className="card-text">Descripcion: {description}</p>
            <p className="card-text">Precio: ${price}</p>
            {
                false
                ? <Link to='/cart'>Ir al carrito</Link>
                : <Counter onConfirm={handleAdd} stock={stock} initial={getQuantityProd(id)} />
            }
            </div>
        </div>
        </div>
    )
}

export default ItemDetail