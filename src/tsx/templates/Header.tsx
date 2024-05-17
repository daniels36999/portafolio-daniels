import { Link } from 'react-router-dom';
import { useState } from 'react';

import imagenes from '../../assets/imagenes';
import Boton from './recursos/botones';
import Iconos from './recursos/svg';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className="header">
            <div className="header-logo">
                <Link to="/portafolio-daniels" >
                    <img src={imagenes.logo} alt="Imagen Logo" />
                </Link>
            </div>
            <div className="header-amburguesa" onClick={toggleMenu}>
                 {Iconos('amburguesa')}
            </div>
            <div className={`header-enlaces ${isMenuOpen ? 'activa-anburguesa' : ''}`}>
                <Link to="/portafolio-daniels"> Inicio</Link>
                <Link to="/portafolio-daniels/portafolio"> Portafolio</Link>
                <Link to="/portafolio-daniels/servicios"> Servicios</Link>
                <Link to="/portafolio-daniels/blog"> Blog</Link>
                <Link to="/portafolio-daniels/mi"> Sobre Mi</Link>
                <Link to="/portafolio-daniels/contacto"> Contacto</Link>
            </div>
            <div className='footer-social-1 header-btn'>
                <Boton 
                tipo='btn1'
                enlace='https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/'
                svg='linkedin'
                clase=''nombre=''/>
            <Boton 
                tipo='btn1'
                enlace='https://github.com/daniels36999/'
                svg='github'
                clase=''nombre=''/>
        </div>         
        </header >
    );
  };
  
  export default Header