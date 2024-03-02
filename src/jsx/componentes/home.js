import React , { useState, useEffect }from 'react';
import imagenes from '../../assets/imagenes';
import Header from '../templates/header';
import Curso from '../templates/curso';
import Consola from '../templates/consola';
import Footer from '../templates/footer';
  

const Home = () => {

    {/* --------------------------------- */}

    const clicProyectos= (url) => {
        window.open(url, '_blank');
      };

    const clicEnlace = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            {/* --------------------------------- */}
            <Header />
            {/* --------------------------------- */}

            <h1>Portafolio Digital</h1>

            {/* --------------------------------- */}
            <section className='proyectos contenedor'>
                <h2>CONOCIMIENTOS</h2>
                <div className='proyecto-informacion'>
                    <p className='informacion-texto'>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>
                </div>
                <div className='proyecto-curso'>
                    <button onClick={() => clicProyectos('https://daniels36999.github.io/portafolio-daniels')} className="proyecto-btn-dev"> 
                       <img src={imagenes.logo} alt="Imagen Logo"/> 
                        <p>Cyber Threat Intelligence</p>
                    </button>
                    <button onClick={() => clicProyectos('https://daniels36999.github.io/portafolio-daniels')} className="proyecto-btn-dev"> 
                       <img src={imagenes.logo} alt="Imagen Logo"/> 
                        <p>Cyber Threat Intelligence</p>
                    </button>
                    <button onClick={() => clicProyectos('https://daniels36999.github.io/portafolio-daniels')} className="proyecto-btn-dev"> 
                       <img src={imagenes.logo} alt="Imagen Logo"/> 
                        <p>Cyber Threat Intelligence</p>
                    </button>
                </div>
            </section>

            {/* --------------------------------- */}
            <section className='informacion contenedor'>

                <h2>PROYECTOS</h2>



                <p className='informacion-texto'>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>

                <div className='informacion-contenido'>
                    <div className='informacion-caracteristicas'>
                        <div>
                            <p>Hola Soy Daniels</p>
                            <h2>CONOCIMIENTOS</h2>
                            <p>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>
                        </div>
                        <div>
                            <ul>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                            </ul>
                        </div>
                        <div className='informacion-botones'>
                            <button onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                <p>Aplastame</p>
                            </button>
                            <button onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                <p>Aplastameee</p>
                            </button>
                        </div>

                    </div>

                    <div class="informacion-consola">
                       <Consola /> 

                    </div>

                </div>

            </section>

            {/* --------------------------------- */}
            <section className='informacion contenedor'>

                <h2>PROYECTOS</h2>

                <p className='informacion-texto'>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>

                <div className='informacion-contenido'>
                    <div className='informacion-imagen'>
                        <img src={imagenes.bg} alt="Imagen Logo"/>
                    </div>
                    <div className='informacion-caracteristicas'>
                        <div>
                            <p>Hola Soy Daniels</p>
                            <h2>CONOCIMIENTOS</h2>
                            <p>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>
                        </div>
                        <div>
                            <ul>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                            </ul>
                        </div>
                        <div className='informacion-botones'>
                            <button onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                <p>Aplastame</p>
                            </button>
                            <button onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                <p>Aplastame</p>
                            </button>
                        </div>

                    </div>

                </div>

            </section>

            {/* --------------------------------- */}
            <section className="contenedor">
                
                <h2>PROYECTOS</h2>

                <p className='informacion-texto'>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>

                <div className='cursos '>
                    <Curso 
                        titulo='Front-End | Blog'
                        imagen='bg'
                        descripcion='Esta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita'
                        enlaces={['github', 'github']}
                        tecnologias={['html', 'css', 'css']}
                    />

                    <Curso 
                        titulo='Front-End | Blog'
                        imagen='bg'
                        descripcion='Esta es una pagina bonita'
                        enlaces={['github', 'netlify']}
                        tecnologias={['html', 'css']}
                    />

                    <Curso 
                        titulo='Front-End | Blog'
                        imagen='bg'
                        descripcion='Esta es una pagina bonita'
                        enlaces={['github', 'netlify']}
                        tecnologias={['html', 'css']}
                    />

                    <Curso 
                        titulo='Front-End | Blog'
                        imagen='bg'
                        descripcion='Esta es una pagina bonita'
                        enlaces={['github', 'netlify']}
                        tecnologias={['html', 'css']}
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;