import React from 'react';
import { Link } from 'react-router-dom';

import getIcon from './recursos/iconos';



function Footer() {

    const clicEnlace = (url) => {
        window.open(url, '_blank');
      };    

  return (
      
    <footer className="footer ">
        <div className="footer-container-1">
            <div className="footer-information"> {/* SOBRE MI */}
                <h1 className="logo">X-Daniel'S</h1>
                <p>¡Hola! Este es mi portafolio virtual, donde puedes ver algunos de los proyectos en los que he trabajado. Si quieres saber más sobre mí o contactarme, ¡visita mis páginas de contacto!</p>

                <div className="social">
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

            <div className="footer-information "> {/* LOCATION*/}
                <h2>Address</h2>
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
                    <p>dx.daniels14@gmail.com</p>
                </div>
            </div>

            <div className="footer-information "> {/* ENLACES */}
                <h2>Quick Links</h2>
                <div className="footer-links">
                    <Link className="btn-link" to="/portafolio-daniels" >&gt;  Inicio</Link>
                    <Link className="btn-link" to="/nosotros" >&gt;  Sobre Mi</Link>
                    <Link className="btn-link" to="#" >&gt;  Our Services</Link>
                    <Link className="btn-link" to="#" >&gt;  Condition</Link>
                    <Link className="btn-link" to="#" >&gt;  Support</Link>
                </div>
            </div>

            <div className="footer-information "> {/* CONTACTAME */}
                <h2>Newsletter</h2>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div >
                    <input className="input" type="text" placeholder="Your Email"/>
                    <button type="button" className="signbtn">SignUp</button>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>

        <div className="footer-container-2">
            <p className="copyrigth"> Todos los derechos reservados  &copy;</p>
            <p>Design By: <button onClick={() => clicEnlace('https://github.com/daniels36999')}> Daniels Yautibug </button></p>
        </div>
    </footer>

  );
}

export default Footer;