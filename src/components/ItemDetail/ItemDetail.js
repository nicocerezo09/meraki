import Counter from "../Counter/Counter"
import { useState ,useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../Context/CartContext"

// const ButtonCount = ({onConfirm, stock, initial = 1}) => {
//     const [count, setCount] = useState(initial)

//     const increment = () => {
//         if(count < stock ) {
//             setCount(count + 1)
//         }
//     }

//     const decrement = () => {
//         if(count > initial ) {
//             setCount(count - 1)
//         }
//     }

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )

// }

// const Select = ({ options = [], onSelect}) => {
//     return (
//         <select onChange={(e) => onSelect(e.target.value)}>
//             {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}
//         </select>
//     )
// }

const ItemDetail = ({id, name, img, category, description, price, stock  }) => {
    

    const [quantity, setQuantity] = useState(0)

    const { addItem, isItCart } = useContext(CartContext)

    const handleAdd = (count) => {
        setQuantity(count)
    
        const objProd = {
            id, name, price
        }

        addItem({...objProd, quantity: count})
        
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
            {isItCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <Counter onConfirm={handleAdd} stock={stock} />}
            </div>
        </div>
        </div>
    )
}

export default ItemDetail