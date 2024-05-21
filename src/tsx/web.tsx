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
                <div className='curso-skill-icono'>
                  {Iconos('analisis')}
                </div>
                <h3>Front-end</h3>
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
                <div className='curso-skill-icono'>
                  {Iconos('data')}
                </div>
              <h3>Back-End</h3>
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
                  C2_Img='pbta1'
                  C2_Img2='pba1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Reportes | Ventas'
                  C2_Titulo='Ventas de Video Juegos'
                  C2_Enlace='https://github.com/daniels36999'
                  C2_Descripcion={`Ventas vs Año vs Región
                                   Ventas vs Género vs Pais
                                   Ventas vs Año vs Región`}/>

            <Curso2
                  C2_Color='color-web'
                  C2_Img='pbtb1'
                  C2_Img2='pbb1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Análisis | DAX'
                  C2_Titulo='Indicadores Mundiales'
                  C2_Enlace='https://github.com/daniels36999'
                  C2_Descripcion={`Análisis por Categorias
                                   Integración y Relaciones
                                   Esperanza de vida y mortalidad infantil`}/>

            <Curso2
                  C2_Color='color-web'
                  C2_Img='pbtc1'
                  C2_Img2='pb1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Análisis | DAX'
                  C2_Titulo='Reporte RRHH'
                  C2_Enlace='https://github.com/daniels36999'
                  C2_Descripcion={`Análisis por Categorias
                                   Costos totales por sueldo
                                   Evaluación de Desempeño`}/>

            <Curso2
                  C2_Color='color-web'
                  C2_Img='pbtd1'
                  C2_Img2='pb1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Análisis | DAX'
                  C2_Titulo='Finanzas Personales'
                  C2_Enlace='https://github.com/daniels36999'
                  C2_Descripcion={`Ingresos, Utilidad, Saldo
                                   Metas, Presupuesto, Esp. Financiera
                                   Reportes de Finanzas Personales`}/>

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