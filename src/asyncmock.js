//pseudo base de datos

const products = [
    { id: 1, name: 'iphone 12', price: 1000, category: 'celular', stock: '25', description: 'descripcion iphone 12'},
    { id: 2, name: 'iphone 13', price: 1000, category: 'celular', stock: '25', description: 'descripcion iphone 12'},
    { id: 3, name: 'iphone 12', price: 1000, category: 'celular', stock: '25', description: 'descripcion iphone 12'}
]

export const fakeFetch = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}