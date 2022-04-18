//pseudo base de datos

const products = [
    { 
    id: '1',
    name: 'Shampoo Redensificante True Volume',
    price: 2500,
    category: 'Shampoo', 
    img:'https://mensandbeauty.com/wp-content/uploads/2019/06/mejores-productos-de-cabello-para-hombre-shampoos-black-jack-champu-redensificante-true-volume.jpg.webp',
    stock: 50, 
    description: ' mezcla de ingredientes botánicos que ayudan a nutrir tanto el cabello como el cuero cabelludo y un complejo que ayuda a que los folículos pilosos se vean saludables y completos'
    },
    { 
    id: '2', 
    name: 'Shampoo Anticaspa Redken Brews', 
    price: 1700, 
    category: 'Shampoo', 
    img: 'https://mensandbeauty.com/wp-content/uploads/2019/06/mejores-productos-de-cabello-para-hombre-shampoos-champu-redken-brews.jpg.webp',
    stock: 50, 
    description: 'es un champú anticaspa para hombres que alivia y calma el cuero cabelludo, ayudando a eliminar las escamas de caspa que encontramos en la fibra capilar'
    },
    { 
    id: '3', 
    name: 'Shampoo Silver White', 
    price: 1500, 
    category: 'Shampoo',
    img: 'https://mensandbeauty.com/wp-content/uploads/2019/06/mejores-productos-de-cabello-para-hombre-shampoos-montibello-champu-silver-white-treat-naturtech-1.jpg.webp',
    stock: 50, 
    description: 'es un champú fabricado para canosos o totalmente blancos. Consigue neutralizar el tono amarillento de las canas, producido en muchos casos por el calor del secador, por las planchas de pelo, o por agentes externos'
    },
    { 
    id: '4', 
    name: 'Cera Moldeadora Defining Cream', 
    price: 1500, 
    category: 'Cera',
    img: 'https://mensandbeauty.com/wp-content/uploads/2019/05/mejores-productos-belleza-para-hombre-shave-barbers-spa-the-shave-club-cera-pelo-moldeadora-defining-cream.jpg.webp',
    stock: 50, 
    description: 'proporciona un look suave al tacto y duraderp. Cuenta con un nivel de fijación de 3 sobre 5, lo que proporciona una fijación natural sin apelmazar el cabello'
    },
    { 
    id: '5', 
    name: 'Cera Bálsamo Original Camden', 
    price: 1200, 
    category: 'Cera',
    img: 'https://mensandbeauty.com/wp-content/uploads/2019/05/mejores-productos-de-cabello-para-hombre-candem-barbershop-balsamo-cera-original.jpg.webp',
    stock: 50, 
    description: 'la cera Defining Cream, consigues una fijación y definición extremas, pudiendo dar a tu pelo la forma y el estilo que mas te gusten y más se adapte a ti'
    },
    { 
    id: '6', 
    name: 'Cera Capital Force definitive', 
    price: 1500, 
    category: 'Cera',
    img: 'https://mensandbeauty.com/wp-content/uploads/2019/05/mejores-productos-de-cabello-para-hombre-cera-kerastase-homme-capital-force.jpg.webp',
    stock: 50, 
    description: 'Aparte de conseguir brillo y un aroma fresco y masculino, aporta volumen para lucir una barba espesa y densa. Cuenta con ingredientes 100% naturales, por lo que está libre de fragancias o conservantes artificiales'
    }
]

const categories = [
    {id: 'Shampoo', description: 'Shampoo'},
    {id: 'Cera', description: 'Cera'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}


export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const ok = true;
            setTimeout(() => {
                if (ok){
                    resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products);
                } else {
                    reject('error');
                }
            }, 500);
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
