import { useState, useEffect } from 'react';
import { getProductsById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = ({ setCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId} = useParams()

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    return (
        <div>
            {
                loading ?
                    <div>
                        <span className="loader"></span>
                    </div>
                    :
                product ?
                    <ItemDetail {...product}  setCart={setCart} cart={cart}/> :
                    <h1>El producto no existe</h1>
            }
            
        </div>
    )

}
export default ItemDetailContainer


