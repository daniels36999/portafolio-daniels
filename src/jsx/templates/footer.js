import React from 'react';
import { Link } from 'react-router-dom';

import getIcon from './recursos/iconos';
import imagenes from '../../assets/imagenes';



function Footer() {

    const anio = new Date().getFullYear();
    const clicEnlace = (url) => {
        window.open(url, '_blank');
      };    

  return (
      
    <footer className="footer ">
        <div className="footer-container-1">

            <div className="footer-information"> {/* SOBRE MI */}
                <div className='footer-titulos'>
                    <h1>Daniel Yautibug</h1>
                </div>
                <p>¡Hola! Este es mi portafolio virtual, donde puedes ver algunos de los proyectos en los que he trabajado. ¡visita mis páginas de contacto!</p>
                <div className="footer-social-1">
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

            <div className="footer-information "> {/* LOCATION*/}
                <div className='footer-titulos'>
                    <h2>Address</h2>
                </div>
                <div className='address-contenedor'>
                    <div className="footer-address">
                        {getIcon('location')}
                        <p>Ecuador</p>
                    </div>
                    <div className="footer-address">
                        {getIcon('address')}
                        <p>Guamote, Chimbprazo</p>
                    </div>
                    <div className="footer-address">
                        {getIcon('email')}
                        <p className='text-largo'>dx.daniels14@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-information"> {/* ENLACES */}
                <div className='footer-titulos'>
                     <h2>Quick Links</h2>
                </div>
                <div className="footer-links centrar-links">
                    <Link className="btn-link" to="/portafolio-daniels" >&gt;  Inicio</Link>
                    <Link className="btn-link" to="/nosotros" >&gt;  Sobre Mi</Link>
                    <Link className="btn-link" to="#" >&gt;  Our Services</Link>
                    <Link className="btn-link" to="#" >&gt;  Condition</Link>
                    <Link className="btn-link" to="#" >&gt;  Support</Link>
                </div>
            </div>

            <div className="footer-information "> {/* CONTACTAME */}
                <div className='footer-titulos'>
                    <h2>Newsletter</h2>
                </div>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className='footer-logo'>
                    <Link  to="/portafolio-daniels" >
                        <img src={imagenes.logo} alt="Imagen Logo" />
                    </Link>
                </div>
            </div>

        </div>

        <div className="footer-container-2">
            <p className="copyrigth"> Todos los derechos reservados  &copy; {anio} | <button onClick={() => clicEnlace('https://github.com/daniels36999')}> Daniels Yautibug </button></p>
        </div>
    </footer>

  );
}

export default Footer;