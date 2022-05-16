import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect (() => {
        setLoading(true)

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    

        

    }, [categoryId])

    if(loading) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        )
    }

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }
    


    return(
        <div>
        <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer