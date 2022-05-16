
import { useContext, useState } from "react";
import  { UserContext } from "../../Context/UserProvider";


export const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { registerUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('procesando form: ', email, password);
        try {
            await registerUser(email, password)
            console.log("usuario creado")
        } catch(error) {
            console.log(error.code);
        }
    }

  return (
    <>
        <h1>Registrarme</h1>
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
            <button type="submit">Registrar</button>
        </form>
    </>
  )
}

export default Register;
