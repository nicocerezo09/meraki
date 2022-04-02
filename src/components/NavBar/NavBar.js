import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = (props) => {
    console.log(props)
    return(
    <nav className='navbar navbar-expand-lg navbar-light bg-light pb-0 pt-0'>
        <div className='container-fluid'>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center mb-0 mt-0' id='navbarSupportedContent'>
                <ul className='navbar-nav me-5 mb-2 mb-lg-0'>
                    <li className='nav-item'>
                         <a className='nav-link active' aria-current='page' href='#'>Historia</a>
                         </li>
                    <li className='nav-item'>
                        <a className='nav-link active' href='#'>Turnos</a>
                     </li>
                    <li className='nav-item dropdown'>
                        <a className='nav-link dropdown-toggle active' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Servicios
                        </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li><a className='dropdown-item' href='#'>Corte</a></li>
                    <li><a className='dropdown-item' href='#'>Peinado</a></li>
                    <li><a className='dropdown-item' href='#'>Coloracion</a></li>
                </ul>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link active'>Producciones</a>
                    </li>
                </ul>
                <img src={'./images/logo1.png'} alt='' width='150' height='130' className='me-5'/>
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