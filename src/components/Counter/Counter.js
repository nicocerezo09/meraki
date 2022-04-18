import { useState } from "react"
import './Counter.css';

const Counter = ({onConfirm, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock ) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > initial ) {
            setCount(count - 1)
        }
    }

    return (
        <div>
        <div className="BotonesHorizontal">
            <button onClick={decrement} className="BotonesGrandes">-</button>
            <p className="mx-2">{count}</p>
            <button onClick={increment} className="BotonesGrandes">+</button>
       </div>
       <div className="BotonesHorizontal">
           <button onClick={() => onConfirm(count)} className="btn btn-dark">Agregar al carrito</button>
       </div>
       </div>
        // <div>
        //     <p>{count}</p>
        //     <button onClick={decrement}>-</button>
        //     <button onClick={increment}>+</button>
        //     <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        // </div>
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

