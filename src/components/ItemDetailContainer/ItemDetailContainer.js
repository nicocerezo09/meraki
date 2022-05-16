import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { firestoreDb } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = ({ setCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()

    useEffect(() => {
        setLoading()
        

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    if(loading) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        )
    }

    return (
        <div>
            {
                product ?
                    <ItemDetail {...product}  setCart={setCart} cart={cart}/> :
                    <h1>El producto no existe</h1>
            }
            
        </div>
    )

}
export default ItemDetailContainer


