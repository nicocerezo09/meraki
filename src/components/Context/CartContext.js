import { createContext, useState } from "react";


const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (producToAdd) => {
        setCart([...cart, producToAdd ])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod =>  {
            count = count += prod.getQuantity
        })
        return count
    }

    const isInCart = (id) => {

        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }
    
    const removeItem = (id) => {
       const products =  cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return (
        <CartContextProvider value={{
            cart,
            addItem,
            getQuantity,
            isInCart, 
            clearCart,
            removeItem
        }}>
            {children}
        </CartContextProvider>
    )
}

export default CartContext