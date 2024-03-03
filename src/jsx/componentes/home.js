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
         
        <div class="space stars1"></div>
        <div class="space stars2"></div>
        <div class="space stars3"></div>
       {/* --------------------------------- */}
       <div className='home'>  
        <section className='portada'>
            <div className='contenido-portada'>
                <Header />
                <div className='ss'>
                    <h1>Portafolio Digital</h1>
                </div>
            </div>

        </section>
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
                        <div className='inf-caracteristicas'>
                            <h4>Hola Soy Daniels</h4>
                            <h2>CONOCIMIENTOS</h2>
                            <p>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>
                        </div>
                        <div>
                            <ul className='home-lista'>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                            </ul>
                        </div>
                        <div className='informacion-botones'>
                            <button className='btn-cont-home' onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                <p>Aplastame</p>
                            </button>
                            <button  className='btn-cont-home' onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
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
                        <div className='inf-caracteristicas'>
                            <h4>Hola Soy Daniels</h4>
                            <h2>CONOCIMIENTOS</h2>
                            <p>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>
                        </div>
                        <div>
                            <ul className='home-lista'>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                                <li>Hey Saludame</li>
                            </ul>
                        </div>
                        <div className='informacion-botones'>
                            <button className='btn-cont-home' onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                <p>Aplastame</p>
                            </button>
                            <button  className='btn-cont-home' onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
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
        </div>
    );
};

export default Home;