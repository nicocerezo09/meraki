import Counter from "../Counter/Counter";

const Item = ({name, img}) => {
    return (
        <section>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h3>{name}</h3>
            <button>Ver detalle</button>
            <Counter />
            <button>Agregar al carrito</button>
        </section>
    )
}

export default Item