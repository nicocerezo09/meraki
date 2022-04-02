const Item = ({name, img}) => {
    return (
        <section>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h3>{name}</h3>
            <button>Ver detalle</button>
        </section>
    )
}

export default Item