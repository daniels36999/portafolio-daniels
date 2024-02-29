import React from 'react';
import { Link } from 'react-router-dom';

import getIcon from './recursos/iconos';
import imagenes from '../../assets/imagenes';

const Header = () => {

    const clicEnlace = (url) => {
        window.open(url, '_blank');
      };

    return (
        <header>
            <div className='header'>
                <div className='header-logo'>
                    <Link className="link-header" to="/portafolio-daniels" >
                        <img src={imagenes.logo} alt="Imagen Logo" />
                    </Link>
                </div>
                <div className='header-links'>
                    <Link className="link-header" to="/portafolio-daniels" >&gt;  Inicio</Link>
                    <Link className="link-header" to="/nosotros" >&gt;  Sobre Mi</Link>
                    <Link className="link-header" to="/home" >&gt;  Servicios</Link>
                    <Link className="link-header" to="/nosotros" >&gt;  Blog Mi</Link>
                    <Link className="link-header" to="/nosotros" >&gt;  Contactos</Link>
                </div>

                <div className="header-social">
                    <button onClick={() => clicEnlace('https://portafolio-daniels.netlify.app')} className="social-btn"> 
                        {getIcon('web')}
                    </button>
                    <button onClick={() => clicEnlace('https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/')} className="social-btn"> 
                        {getIcon('linkedin')}
                    </button>
                    <button onClick={() => clicEnlace('https://github.com/daniels36999')} className="social-btn"> 
                        {getIcon('github')}
                    </button>
                    <button onClick={() => clicEnlace('https://grabcad.com/daniel.patricio.yautibug-1')} className="social-btn"> 
                        {getIcon('grabcad')}
                    </button>
                </div>
            </div>

        </header>
    )
  }
  
  export default Header