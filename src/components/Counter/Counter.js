import { useState, useEffect } from "react"

const Counter = () => {
    // console.log(useState())

    // const myState = useState(0)
    const [count, setCount] = useState(0)
    // console.log(myState)

    useEffect(() => {
        console.log('se acaba de montar el componente')
        setTimeout(() =>{
            setCount(10)
        }, 3000)
    }, [])

    useEffect(() => {
        console.log('cambio el count')
    }, [count])

    const decrement = () => {
        // console.log('decrement')
        setCount(count -1)
    }

    const increment = () => {
        // console.log('increment')
        if (count < 10){
        setCount(count + 1)
        }
    }
    console.log('se va a montar el componente')

    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;

