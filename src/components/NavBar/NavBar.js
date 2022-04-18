import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    }, [])

    return(
    <nav className='navbar navbar-expand-lg navbar-light bg-light pb-0 pt-0'>
        <div className='container-fluid'>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center mb-0 mt-0' id='navbarSupportedContent'>
                <ul className='navbar-nav me-5 mb-2 mb-lg-0'>
                <li className='nav-item dropdown'>
                        <Link  to ='/' className='nav-link dropdown-toggle active'  id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Productos
                        </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                { categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`} className='nav-link active'>{cat.description}</Link>)}
                </ul>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-link active' >Turnos</Link>
                     </li>
                    <li className='nav-item dropdown'>
                        <Link  to ='/' className='nav-link dropdown-toggle active'  id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Servicios
                        </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li><Link to ='/' className='dropdown-item' >Corte</Link></li>
                    <li><Link to ='/' className='dropdown-item' >Peinado</Link></li>
                    <li><Link to ='/' className='dropdown-item' >Coloracion</Link></li>
                </ul>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-link active' >Producciones</Link>
                    </li>
                    
                </ul>
               <Link to='/'> <img src={'./images/logo1.png'} alt='' width='150' height='130' className='me-5'/></Link> 
            <form className='d-flex'> 
                <input className='form-control me-2' type='search' placeholder='Buscar' aria-label='Search'/>
                <button className='btn btn-outline-dark' type='submit'>Buscar</button>
            </form>
            <div>
            <CartWidget />
            </div>
            </div>
        </div>
                </nav>
    )
}

export default NavBar;