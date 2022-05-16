import { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserProvider';
import { useNavigate } from "react-router-dom";
import './LogIn.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { loginUser } = useContext(UserContext);
    const navegate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('procesando form: ', email, password);
        try {
            await loginUser(email, password)
            console.log("usuario logueado")
        } catch(error) {
            console.log(error.code);
        }
    }

    return (
        <div className="container">
            <h1 className='title'>Iniciar Sesion</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                placeholder="ingrese email"
                value={email}
                onChange= {e => setEmail(e.target.value)} 
                />
                <input 
                type="password" 
                placeholder="ingrese password"
                value={password}
                onChange= {e => setPassword(e.target.value)} 
                />
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login;