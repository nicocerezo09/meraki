import { Link } from "react-router-dom"
import './Item.css'


const Item = ({name, img, id}) => {


    // const value = useContext(Context)
    


    // const value = useContext(Context)
    // console.log(value)

    return (
        <div className="col">
        <div className="card mb-2">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/detail/${id}`} className="btn btn-dark">Ver detalle</Link>
            </div>
        </div>
        </div>
    )
}

export default Item