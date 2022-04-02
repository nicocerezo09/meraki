//pseudo base de datos

const products = [
    { 
    id: 1,
    name: 'corte 1',
    price: 1000,
    category: 'celular', 
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBz5nD50j_Nm3mxVsJQGQeIJGmoGOxFmkw0WCte2RZTvWiShLSR7X3qRYTps6_flXRu_4&usqp=CAU',
    stock: 25, 
    description: 'corte basico 1'
    },
    { 
    id: 2, 
    name: 'corte 2', 
    price: 700, 
    category: 'celular', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4JF7UXhfGbXgI3Xx1Zxc9CxSDAsHdS3cgMNKfoJwSDH1ud_wYDrLuC3PaS-ASHcfwtI&usqp=CAU',
    stock: 5, 
    description: 'corte basico 2'
    },
    { 
    id: 3, 
    name: 'corte 3', 
    price: 800, 
    category: 'celular',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBz5nD50j_Nm3mxVsJQGQeIJGmoGOxFmkw0WCte2RZTvWiShLSR7X3qRYTps6_flXRu_4&usqp=CAU',
    stock: 2, 
    description: 'corte basico 3'
    }
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        const ok = true;
            setTimeout(() => {
                if (ok){
                    resolve(products);
                } else {
                    reject('error');
                }
            }, 2000);
    })
}