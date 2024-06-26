
import { Link } from 'react-router-dom';
import Iconos from './recursos/svg';
import Consola from './recursos/consola';
const About = () => {
    

    return(
        <div className='about contenedor'>
            <div className='about-contenido'>
                <div className='titulos'>
                    <h3>{Iconos('pc')} Estudiante</h3> 
                    <h1>Desarrollador Web | Front-End</h1>
                    <div className="linea-efecto"></div>
                </div>
                <p>Actualmente, estoy especializandome en el desarrollo de aplicaciones web (Front-End) utilizando herramientas y tecnologías de vanguardia. Mi conjunto de habilidades incluye HTML, CSS, JavaScript, Sass, Gulp y React, entre otras. Además, tengo experiencia en optimizar el rendimiento de las páginas web para garantizar que sean completamente responsivas.</p>
                <div className='about-lista'>
                    <div className='about-lista1'>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>HTML</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>CSS</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className='about-lista1'>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>SASS</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>GULP</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>REACT</p>
                        </div>
                    </div>
                </div>
                <div className='about-contacto'>
                    <div className='ab-contacto-img'>
                        {Iconos('email2')}
                    </div>
                    <div className='ab-contacto-desc'>
                        <span>Más Información...</span>   
                        <h3>dx.daniels14@gmail.com</h3>   
                    </div>
                </div>
                <div className='about-link'>
                    <button className='btn3'>
                        <Link to="/portafolio" > Portafolio &rarr;</Link>
                        <span className='btn3-span'></span>
                    </button>
                     
                </div>
            </div>
            <div className='about-consola'>
                <Consola />
            </div>
        </div>

    );
  };

  export default About