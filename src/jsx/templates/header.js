import React from 'react';
import { Link } from 'react-router-dom';

import getIcon from './recursos/iconos';
import imagenes from '../../assets/imagenes';

const Header = () => {

    const clicEnlace = (url) => {
        window.open(url, '_blank');
      };

    return (
        <header >
            <div className='header'>
                <div className='header-logo'>
                    <Link className="link-header" to="/portafolio-daniels" >
                        <img src={imagenes.logo} alt="Imagen Logo" />
                    </Link>
                </div>
                <div className='header-links'>
                    <div className='cont-enlace'>
                        <div className='enlace'>
                            <Link className="link-header" to="/portafolio-daniels" >&gt;  Inicio</Link>
                        </div>
                        <div className='enlace'>
                            <Link className="link-header" to="/nosotros" >&gt;  Sobre Mi</Link>
                        </div>
                        <div className='enlace'>
                            <Link className="link-header" to="/home" >&gt;  Servicios</Link>
                        </div>
                        <div className='enlace'>
                            <Link className="link-header" to="/nosotros" >&gt;  Blog Mi</Link>
                        </div>
                        <div className='enlace'>
                            <Link className="link-header" to="/nosotros" >&gt;  Contactos</Link>
                        </div>
                    </div>
                </div>

                <div className="header-social">
                    <button className="Btn" onClick={() => clicEnlace('https://portafolio-daniels.netlify.app/')}>
                        <span className="svgContainer">
                             {getIcon('web')}
                        </span>
                        <span className="BG web"></span>
                    </button>
                    <button className="Btn" onClick={() => clicEnlace('https://github.com/daniels36999')}>
                        <span className="svgContainer">
                             {getIcon('github')}
                        </span>
                        <span className="BG github"></span>
                    </button>
                    <button className="Btn" onClick={() => clicEnlace('https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/')}>
                        <span className="svgContainer">
                             {getIcon('linkedin')}
                        </span>
                        <span className="BG linkedin"></span>
                    </button>
                    <button className="Btn" onClick={() => clicEnlace('https://grabcad.com/daniel.patricio.yautibug-1')}>
                        <span className="svgContainer">
                             {getIcon('grabcad')}
                        </span>
                        <span className="BG grabcad"></span>
                    </button>
                </div> 
            </div>

        </header>
    )
  }
  
  export default Header