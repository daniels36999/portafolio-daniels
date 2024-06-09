import Header from './templates/Header';
import Footer from './templates/footer';
import Curso2 from './templates/curso2';
import imagenes from '../assets/imagenes';
import Iconos from './templates/recursos/svg';
import Boton from './templates/recursos/botones';



function Web() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='curso-proyecto contenedor'>

          {/* //SECCION DESCRIPCION */}
          <div className='titulos'>
            <h3>Desarrollo Web</h3>
            <h1>Desarrollo Web | HTML5, CSS3, JS AJAX PHP y MySQL</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>El desarrollo Web es un enfoque integral para el desarrollo de sitios y aplicaciones web, abarcando desde la estructura y el diseño visual hasta la interactividad y la funcionalidad del servidor. Permite crear experiencias web modernas y dinámicas, integrando tecnologías de front-end y back-end para ofrecer soluciones completas y eficientes.</p>
          </div>
          <div className='curso-informacion'>
            <div className='curso-inf-skill'>
                <div className='curso-inf-titulo'>
                  <div className='curso-skill-icono'>
                    {Iconos('html')}
                  </div>
                  <h3>Front-End</h3>
                </div>
                <p>El Front-End es la parte visual y interactiva de un sitio web, desarrollada con HTML5, CSS3 y JavaScript. Es responsable de la estructura, el diseño y la interacción del usuario. </p>
                <h4>Aptitudes adquiridas</h4>
                <ul>
                  <li>Metodologias HTML y CSS</li>
                  <li>Desarrollo con React y Vite</li>
                  <li>Automatización con SASS y GULP</li>
                  <li>Páginas responsivas para dispositivos</li>   
                </ul>
            </div>
            <div className='curso-inf-img'>
              {Iconos('web2')}
              <p>Desarrollo Web</p>
            </div>
            <div className='curso-inf-skill'>
            <div className='curso-inf-titulo'>
                  <div className='curso-skill-icono'>
                    {Iconos('pc')}
                  </div>
                  <h3>Back-End</h3>
                </div>
              <p>El Back-End gestiona la lógica del servidor y la base de datos con PHP y MySQL. Procesa datos y maneja la autenticación, comunicándose con el front-end para ofrecer contenido dinámico.</p>
              <h4>Aptitudes adquiridas</h4>
              <ul>
                <li>Base de Datos con MS SQL Server</li>
                <li>Sitios dínamicos con PHP y MYSQL</li>
                <li>Aplicaciones CRUD con PHP y MySQL</li>
                <li>Desarrollo de sitios web's escalables</li>
              </ul>
            </div>
          </div>

          {/* //SECCION PROYECTOS */}
          <div className='titulos'>
            <h3>Proyectos</h3>
            <h1>Proyectos realizados en el área del Desarrollo Web</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>A continuación, encontrarás proyectos realizados en Desarrollo Web Completo con HTML5, CSS3, JavaScript, AJAX, PHP y MySQL. Cada proyecto está enfocado en la creación de sitios y aplicaciones web dinámicas e interactivas. Estos proyectos son el resultado de cursos que he completado durante mi trayectoria estudiantil y profesional.</p>
          </div>
          <div className='curso-proyecto2'>
            {/*  */}
            <Curso2
                  C2_Color='color-web'
                  C2_Img='wbtb1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Front-End'
                  C2_Titulo='Portafolio Digital'
                  C2_Enlace='https://daniels36999.github.io/portafolio-daniels/'
                  C2_Descripcion={`HTML, CSS, SASS, GULP
                                   React, Vite
                                   Paguina Web Responsiva`}/>

            <Curso2
                  C2_Color='color-web'
                  C2_Img='wbte1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Front-End'
                  C2_Titulo='Evento Musical'
                  C2_Enlace='https://daniels36999.github.io/PaguinaWeb_Proyecto_4/'
                  C2_Descripcion={`HTML, CSS, SASS, GULP
                                   Paguina Web Responsiva
                                   Galeria de Imagenes Webp`}/>

            <Curso2
                  C2_Color='color-web'
                  C2_Img='wbtd1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Front-End'
                  C2_Titulo='Blog Café'
                  C2_Enlace='https://daniels36999.github.io/PaguinaWeb_Proyecto_3/'
                  C2_Descripcion={`Estilos en CSS, Media Queries
                                   Enlaces y Navegacion
                                   Formularios en HTML`}/>

            <Curso2
                  C2_Color='color-web'
                  C2_Img='wbtc1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Front-End'
                  C2_Titulo='Store Online'
                  C2_Enlace='https://daniels36999.github.io/PaguinaWeb_Proyecto_2/'
                  C2_Descripcion={`Introducción a BEM
                                   Grid, Flexbox
                                   Globales, Media Queries`}/>

            <Curso2
                  C2_Color='color-web'
                  C2_Img='wbta1'
                  C2_Nombre='Daniel 2023'
                  C2_Fecha='Front-End'
                  C2_Titulo='Sitio Freelancer'
                  C2_Enlace='https://daniels36999.github.io/PaguinaWeb_Proyecto_1/'
                  C2_Descripcion={`Estilos en CSS, Media Queries
                                   Enlaces y Navegacion
                                   Formularios en HTML`}/>

            <p className='msg-construccion'>"&#9888; Actualmente estamos recopilando mis proyectos más destacados, los cuales estarán disponibles próximamente en mi página. Muy pronto podrás explorar el trabajo que he realizado a lo largo de mi carrera y en los cursos que he completado &#128218;. Mientras tanto, si deseas saber más, puedes consultar mi GitHub o LinkedIn para obtener más detalles sobre mi experiencia y habilidades &#128296;."</p>

          </div>

          {/* //SECCION CERTIFICADO*/}
          <div className='titulos'>
            <h3>Referencias</h3>
            <h1>Certificado | Desarrollo Web</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>En esta sección, puedes encontrar mi certificado del curso de Desarrollo Web Completo con HTML5, CSS3, JavaScript, AJAX, PHP y MySQL. Este curso me permitió adquirir competencias en desarrollo web, aprendiendo a crear sitios y aplicaciones web dinámicas e interactivas, utilizando tecnologías modernas y herramientas avanzadas para garantizar un desarrollo eficiente y de alta calidad.</p>
          </div>
          <div className='curso-certificado'>
            <div className='curso-cert-img'>
              <img src={imagenes.certificado2} alt="" />
            </div>
            <div className='curso-cert-inf'>
              <h3>Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL</h3>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('udemy')}
                  </div>
                  <h4>Entidad: <span>Udemy</span></h4>
                </div>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('date')}
                  </div>
                  <h4>Fecha: <span>Mayo 2024</span></h4>
                </div>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('pc')}
                  </div>
                  <h4>Tipo: <span>Curso Online</span></h4>
                </div>
                
              <Boton 
                    tipo='btn3'
                    enlace='https://www.udemy.com/certificate/UC-1d98e2f3-c22a-45fe-a32f-c405a80652b8/'
                    svg='link'
                    clase=''
                    nombre='Certificado'/>
            </div>
          </div>

        </div>

        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Web