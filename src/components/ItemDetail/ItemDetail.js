import Counter from "../Counter/Counter"
import { useState ,useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../Context/CartContext"


const ItemDetail = ({id, name, img, category, description, price, stock  }) => {
    

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
    
        const objProd = {
            id, name, price, quantity: count
        }

        addItem(objProd)
        
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
            {/* <Select options={options} onSelect={handleSelect} /> */}
            { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <Counter onConfirm={handleAdd} stock={stock} />}
            </div>
        </div>
        </div>
    )
}

export default ItemDetail