import './Footer.css'
import { FaCcVisa, FaBitcoin, FaDollarSign } from "react-icons/fa";
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () =>{

    return(
        <footer>
            <div className="container">
                <div>
                    <p>Entregas a domicilio</p>
                </div>
                <div>
                    <p>Todos los medios de pago</p>
                    <div>
                        <ul>
                            <li><FaCcVisa/></li>
                            <li><FaDollarSign /></li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="container">
                <ul>
                    <li className="social"><SocialIcon url="https://www.linkedin.com/in/nicolascerezo/" bgColor="#0a66c2" /></li>
                    <li className="social"><SocialIcon url="https://github.com/nicocerezo09" network="github" bgColor="	#000000"/></li>
                    <li className="social"><SocialIcon url="https://twitter.com/Nicolascerezo11" network="twitter" bgColor="#1d9bf0"/></li>
                </ul>
            </div>
            <div className="container">
                <p className="copyright">Hecho con ♡ por Nicolas Cerezo © 2022</p>
            </div>
        </footer>
    )
} 

export default Footer