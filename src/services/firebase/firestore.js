import { firestoreDb } from "./index"
import { getDocs, query, collection, where } from "firebase/firestore"



export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) =>{
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')


        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id:doc.id, ...doc.data()}
            })
            resolve(products)
        })
        .catch(error => {
            reject(error)
        })
    })
}