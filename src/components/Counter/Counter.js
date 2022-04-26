import { useState } from "react"
import './Counter.css';

const Counter = ({onConfirm, stock = 0, initial = 1}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock ) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 0 ) {
            setQuantity(quantity - 1)
        }
    }

    if(stock === 0) {
        return <button disabled>No hay stock</button>
    }

    return (
        <div>
        <div className="BotonesHorizontal">
            <button onClick={decrement} className="BotonesGrandes">-</button>
            <p className="mx-2">{quantity}</p>
            <button onClick={increment} className="BotonesGrandes">+</button>
       </div>
       <div className="BotonesHorizontal">
           <button onClick={() => onConfirm(quantity)} className="btn btn-dark">Agregar al carrito</button>
       </div>
       </div>
    )

}

// const Counter = () => {
    
//     const initial = 1
//     const stock = 50
    
//     const [count, setCount] = useState(1)
    

//     const decrement = () => {
//         if (count > initial) {
//         setCount(count -1)
//         }
//     }

//     const increment = () => {
//         if (count < stock) {
//         setCount(count + 1)
//         }
//     }
    

//     return(  
//         <div className="BotonesHorizontal">
//             <button onClick={decrement} className="BotonesGrandes">-</button>
//             <p className="mx-2">{count}</p>
//             <button onClick={increment} className="BotonesGrandes">+</button>
//         </div>
//     )
// }

export default Counter;

