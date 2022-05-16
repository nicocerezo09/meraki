import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { UserContext } from '../../Context/UserProvider'
import { async } from '@firebase/util'


const NavBar = () => {

    const { user, signOutUser } = useContext(UserContext);
    const [categories, setCategories] = useState([]);

    const handleClickLogout = async() => {
        try{
            await signOutUser()
        } catch (erorr) {
            console.log(erorr.code)
        }
    }

    useEffect(() =>{
        // getCategories().then(categories =>{
        //     setCategories(categories)
        // })

        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
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
                <li className='nav-item dropdown mt-4'>
                        <Link  to ='/' className='nav-link dropdown-toggle active'  id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Productos
                        </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                { categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`} className='nav-link active'>{cat.description}</Link>)}
                </ul>
                    </li>
                    <li className='nav-item mt-4'>
                        <Link to ='/' className='nav-link active' >Turnos</Link>
                     </li>
                    <li className='nav-item mt-4'>
                        <Link  to ='/' className='nav-link  active'>
                            Servicios
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/'> <img src={'./images/logo1.png'} alt='' width='150' height='100' className=''/></Link>
                    </li>
                    <div>
                        { user ? (
                            <>
                            
                                <button className='mt-4' onClick={handleClickLogout} >Cerrar Sesion</button>
                            
                            </>
                        ) : (
                            <>
                            <li className='nav-item mt-4'>
                                <Link to ='/Login' className='nav-link active mt-4' >Iniciar Sesion</Link>
                                
                            </li>
                            </>
                    )}
                    </div>
                    <li>
                    <Link to ='/Register' className='nav-link active mt-4' >Registrarme</Link>
                    </li>
                    
                </ul>
                
            
            <div>
            <CartWidget />
            </div>
            </div>
        </div>
                </nav>
    )
}

export default NavBar;