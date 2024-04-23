import { Link } from 'react-router-dom';

import imagenes from '../../assets/imagenes';

const Header = () => {

    return(
        <header className="header">
            <div className="header-logo">
                <Link to="/daniels" >
                    <img src={imagenes.logo} alt="Imagen Logo" />
                </Link>
            </div>
            <div className="header-enlaces">
                <Link to="/daniels"> Inicio</Link>
                <Link to="/nosotros"> Portafolio</Link>
                <Link to="/home"> Servicios</Link>
                <Link to="/nosotros"> Blog</Link>
                <Link to="/nosotros"> Sobre Mi</Link>
                <Link to="/nosotros"> Contacto</Link>
            </div>

            <div className="header-btn">
                 <Link to="/daniels"> Linkedin</Link>
                <Link to="/nosotros"> Githb</Link>
            </div>
            
        </header >
    );
  };
  
  export default Header