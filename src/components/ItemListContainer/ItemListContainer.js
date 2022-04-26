import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const[title, setTitle] = useState()

    const { categoryId } = useParams()

    useEffect (() => {
        getProducts(categoryId).then( prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('este titulo aparecio despues de 2 seg')
        }, 2000)
    })


    return(
        <div>
        <h1>{title}</h1>
        <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer