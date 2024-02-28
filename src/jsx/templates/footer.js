import React from 'react';

function Footer() {
  return (
      
    <footer className="footer">
    <div className="footer-container-1">
        <div className="footer-information"> {/* SOBRE MI */}
            <h1 className="logo">X-Daniel'S</h1>
            <p>¡Hola! Este es mi portafolio virtual, donde puedes ver algunos de los proyectos en los que he trabajado. Si quieres saber más sobre mí o contactarme, ¡visita mis páginas de contacto!</p>

            <div className="social">
                <a href="https://portafolio-daniels.netlify.app/" target="_blank" className="social-btn" rel="noopener noreferrer">
                </a>
                <a href="https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/" target="_blank" className="social-btn" rel="noopener noreferrer">
                </a>
                <a href="https://github.com/daniels36999" target="_blank" className="social-btn" rel="noopener noreferrer">
                </a>
                <a href="https://grabcad.com/daniel.patricio.yautibug-1" target="_blank" className="social-btn" rel="noopener noreferrer">
                </a>
            </div> 
        </div>

        <div className="footer-information "> {/* LOCATION*/}
            <h2>Address</h2>
            <div className="footer-address">
                <p>Ecuador</p>
            </div>
            <div className="footer-address">

                <p>Guamote, Chimbprazo</p>
            </div>
            <div className="footer-address">

                <p>dx.daniels14@gmail.com</p>
            </div>
        </div>

        <div className="footer-information "> {/* ENLACES */}
            <h2>Quick Links</h2>
            <div className="footer-links">
                <a className="btn-link" href="#" rel="noopener noreferrer">&gt;  Inicio</a>
                <a className="btn-link" href="#" rel="noopener noreferrer">&gt;  Sobre Mi</a>
                <a className="btn-link" href="#" rel="noopener noreferrer">&gt;  Our Services</a>
                <a className="btn-link" href="#" rel="noopener noreferrer">&gt;  Term &amp; Condition</a>
                <a className="btn-link" href="#" rel="noopener noreferrer">&gt;  Support</a>
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
        <p>Design By: <a href="https://github.com/daniels36999" target="_blank" rel="noopener noreferrer">Daniels Yautibug</a></p>
    </div>
    </footer>

  );
}

export default Footer;