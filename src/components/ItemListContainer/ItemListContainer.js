import { useState, useEffect } from "react"
import { fakeFetch } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        fakeFetch().then( prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])



    return(
        <div>
        <h1>{props.greeting}</h1>
        <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer