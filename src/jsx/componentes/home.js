import React from 'react';
import Header from '../templates/header';
import Curso from '../templates/curso';
import Footer from '../templates/footer';

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Portafolio Digital</h1>

            <section className="cursos contenedor">

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

                <Curso 
                    titulo='Front-End | Blog'
                    imagen='bg'
                    descripcion='Esta es una pagina bonita'
                    enlaces={['github', 'netlify']}
                    tecnologias={['html', 'css']}
                />

            </section>

            <Footer />
        </div>
    );
};

export default Home;