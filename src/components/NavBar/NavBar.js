import './NavBar.css'

const NavBar = (props) => {
    console.log(props)
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light pb-0 pt-0">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center mb-0 mt-0" id="navbarSupportedContent">
                <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                    <li class="nav-item">
                         <a class="nav-link active" aria-current="page" href="#">Historia</a>
                         </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Turnos</a>
                     </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Servicios
                        </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Corte</a></li>
                    <li><a class="dropdown-item" href="#">Peinado</a></li>
                    <li><a class="dropdown-item" href="#">Coloracion</a></li>
                </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active">Producciones</a>
                    </li>
                </ul>
                <img src={'./images/logo1.png'} alt="" width="150" height="130" class="me-5"/>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn btn-outline-dark" type="submit">Buscar</button>
            </form>
            <a class="nav-link active" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="black" class="bi bi-bag-fill" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg></a>
            </div>
        </div>
                </nav>
    )
}

export default NavBar;