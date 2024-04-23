import { Link } from 'react-router-dom';

import Iconos from './recursos/svg';
import Boton from './recursos/botones';
import imagenes from '../../assets/imagenes';



function Footer() {

    const anio = new Date().getFullYear();
    const clicEnlace = (url:string) => {
        window.open(url, '_blank');
      };    

  return (
      
    <footer className="footer ">
        <div className="footer-container-1">

            <div className="footer-information foot-pos1"> {/* SOBRE MI */}
                <div className='footer-titulos'>
                    <h1>Daniel Yautibug</h1>
                </div>
                <p>¡Hola! Este es mi portafolio virtual, donde puedes ver algunos de los proyectos en los que he trabajado. ¡visita mis páginas de contacto!</p>
                <div className="footer-social-1">
                    <Boton 
                        tipo='btn1'
                        enlace='https://portafolio-daniels.netlify.app/'
                        svg='web'/>

                    <Boton 
                        tipo='btn1'
                        enlace='https://github.com/daniels36999/'
                        svg='github'/>

                    <Boton 
                        tipo='btn1'
                        enlace='https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/'
                        svg='linkedin'/>

                    <Boton 
                        tipo='btn1'  
                        enlace='https://grabcad.com/daniel.patricio.yautibug-1'
                        svg='grabcad'/>
                </div> 
            </div>

            <div className="footer-information foot-pos2"> {/* LOCATION*/}
                <div className='footer-titulos'>
                    <h2>Contactame</h2>
                    <div className="wobbling-2"></div>
                </div>
                <div className='address-contenedor'>
                    <div className="footer-address">
                        {Iconos('direccion')}
                        <p>Ecuador</p>
                    </div>
                    <div className="footer-address">
                        {Iconos('casa')}
                        <p>Chimborazo</p>
                    </div>
                    <div className="footer-address">
                        {Iconos('email')}
                        <p className='text-largo'>dx.daniels14@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-information"> {/* ENLACES */}
                <div className='footer-titulos'>
                     <h2>Enlaces</h2>
                     <div className="wobbling-2"></div>
                </div>
                <div className="footer-links centrar-links foot-pos3">
                    <Link className="btn-link" to="/daniels" >{Iconos('rowD')} Inicio </Link>
                    <Link className="btn-link" to="/nosotros" >{Iconos('rowD')} Portafolio </Link>
                    <Link className="btn-link" to="#" >{Iconos('rowD')} Servicios </Link>
                    <Link className="btn-link" to="#" >{Iconos('rowD')} Blog </Link>
                    <Link className="btn-link" to="#" >{Iconos('rowD')} Sobre Mi </Link>
                    <Link className="btn-link" to="#" >{Iconos('rowD')} Contacto </Link>
                </div>
            </div>

            <div className="footer-information foot-pos4"> {/* CONTACTAME */}
                <div className='footer-titulos'>
                    <h2>Informativo</h2>
                    <div className="wobbling-2"></div>
                </div>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className='footer-logo'>
                    <Link  to="/daniels" >
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