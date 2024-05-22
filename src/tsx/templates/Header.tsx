import { Link, useLocation } from 'react-router-dom';
import { useState} from 'react';

import imagenes from '../../assets/imagenes';
import Boton from './recursos/botones';
import Iconos from './recursos/svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
    };




    return(
        <header className="header">
            <div className="header-logo">
                <Link to="/" >
                    <img src={imagenes.logo} alt="Imagen Logo" />
                </Link>
            </div>
            <div className="header-amburguesa" onClick={toggleMenu}>
                 {Iconos('amburguesa')}
            </div>
            <div className={`header-enlaces ${isMenuOpen ? 'activa-anburguesa' : ''}`}>
                <Link to="/" className={location.pathname === "/" ? "estado-activo" : ""}>Inicio</Link>
                <Link to="/portafolio" className={location.pathname === "/portafolio" ? "estado-activo" : ""}>Portafolio</Link>
                <Link to="/servicios" className={location.pathname === "/servicios" ? "estado-activo" : ""}>Servicios</Link>
                <Link to="/blog" className={location.pathname === "/blog" ? "estado-activo" : ""}>Blog</Link>
                <Link to="/mi" className={location.pathname === "/mi" ? "estado-activo" : ""}>Sobre Mi</Link>
                <Link to="/contacto" className={location.pathname === "/contacto" ? "estado-activo" : ""}>Contacto</Link>
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