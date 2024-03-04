import React , { useState, useEffect }from 'react';
import imagenes from '../../assets/imagenes';
import getSvg from '../templates/recursos/svg';
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
        <Header />
            <div className='contenido-portada'>
                <div className='portada-descripcion'>
                    <div className='portada-desc'>
                        <h1>Portafolio Digital</h1>
                        <p className='port-nombre'>Daniel Yautibug</p>
                        <p className='port-descripcion'> lorelipsun   lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun  lorelipsun </p>
                    </div>

                    <div className='portada-img'>
                        <img src={imagenes.bg} alt="Imagen Logo"/>
                    </div>
                </div>
            </div>

        </section>
            {/* --------------------------------- */}
            <section className='proyectos contenedor'>
                <h2>CONOCIMIENTOS</h2>
                <div className='proyecto-informacion'>
                    <p className='informacion-texto'>¡Bienvenido/a! En esta sección, te invito a explorar mi trayectoria educativa y profesional. Aquí encontrarás una recopilación de proyectos y trabajos significativos que han enriquecido mi carrera hasta el momento. Cada uno de estos proyectos refleja mi dedicación, creatividad y pasión por mi campo profesional. Te invito a explorar y descubrir más sobre mi experiencia y logros. ¡Gracias por tu interés!</p>
                </div>
                <div className='proyecto-curso'>
                    <button onClick={() => clicProyectos('https://daniels36999.github.io/portafolio-daniels')} className="proyecto-btn-dev"> 
                        <div className='svg-web'>
                            {getSvg('web')}
                        </div>
                        
                        <p>Desarrollo Web | Front-End</p>
                    </button>
                    <button onClick={() => clicProyectos('https://daniels36999.github.io/portafolio-daniels')} className="proyecto-btn-dev"> 
                        <div className='svg-electronica'>
                            {getSvg('electronica')}
                        </div>
                        <p>Electrónica</p>
                    </button>
                    <button onClick={() => clicProyectos('https://daniels36999.github.io/portafolio-daniels')} className="proyecto-btn-dev"> 
                        <div className='svg-telecomunicaciones'>
                            {getSvg('telecomunicaciones')}
                        </div>
                        <p>Telecomunicaciones</p>
                    </button>
                </div>
            </section>

            {/* --------------------------------- */}
            <section className='informacion contenedor'>

                <h2>Desarrollo Web | Front-End</h2>
                <p className='informacion-texto'>sta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>

                <div className='informacion-contenido'>
                    <div className='informacion-caracteristicas'>
                        <div className='inf-caracteristicas'>
                            <h4>Hola Soy Daniels</h4>
                            <h2>CONOCIMIENTOS</h2>
                            <p>Actualmente, mi especialización se centra en el desarrollo de aplicaciones web utilizando herramientas y tecnologías de vanguardia. Mi conjunto de habilidades incluye HTML, CSS, JavaScript, Sass, Gulp y React, entre otras. Además, tengo experiencia en optimizar el rendimiento de las páginas web para garantizar que sean completamente responsivas.</p>
                        </div>
                        <div>
                            <ul className='home-lista'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Java Script</li>
                                <li>SASS</li>
                                <li>Gulp</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className='informacion-botones'>
                            <button className='btn-cont-home icon-git' onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                {getSvg('github')}
                                <p>GitHub</p>
                            </button>
                            <button  className='btn-cont-home' onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')}> 
                                <p>Saber Mas ...</p>
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
                        enlaces={['github']}
                        tecnologias={['html', 'css', 'css']}
                    />

                    <Curso 
                        titulo='Front-End | Blog'
                        imagen='bg'
                        descripcion='Esta es una pagina bonita'
                        enlaces={['github']}
                        tecnologias={['html', 'css']}
                    />

                    <Curso 
                        titulo='Front-End | Blog'
                        imagen='bg'
                        descripcion='Esta es una pagina bonita'
                        enlaces={['github']}
                        tecnologias={['html', 'css']}
                    />

                    <Curso 
                        titulo='Front-End | Blog'
                        imagen='bg'
                        descripcion='Esta es una pagina bonita'
                        enlaces={['github']}
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