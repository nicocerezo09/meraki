import { useState, useEffect } from "react"
import './Counter.css';
const Counter = () => {
    
    const initial = 1
    const stock = 7
    
    const [count, setCount] = useState(1)
    

    useEffect(() => {
        console.log('se acaba de montar el componente')
        setTimeout(() =>{
            setCount(1)
        }, 3000)
    }, [])

    useEffect(() => {
        console.log('cambio el count')
    }, [count])

    const decrement = () => {
        if (count > initial) {
        setCount(count -1)
        }
    }

    const increment = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }
    console.log('se va a montar el componente')

    return(  
        <div className="BotonesHorizontal">
            <button onClick={decrement} className="BotonesGrandes">-</button>
            <p className="mx-2">{count}</p>
            <button onClick={increment} className="BotonesGrandes">+</button>
        </div>
    )
}

export default Counter;

