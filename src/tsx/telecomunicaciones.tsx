import Header from './templates/Header';
import Footer from './templates/footer';
// import Curso2 from './templates/curso2';
import imagenes from '../assets/imagenes';
import Iconos from './templates/recursos/svg';
import Boton from './templates/recursos/botones';



function Telecomunicaciones() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='curso-proyecto contenedor'>

          {/* //SECCION DESCRIPCION */}
          <div className='titulos'>
            <h3>Telecomunicaciones</h3>
            <h1>Ingenieria en Telecomunicaciones</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>La ingeniería en telecomunicaciones es una rama de la ingeniería que se centra en el diseño, desarrollo y gestión de sistemas de comunicación. Involucra la transmisión y recepción de información a través de diversos medios como cables, fibra óptica, ondas de radio y satélites. </p>
          </div>
          <div className='curso-informacion'>
            <div className='curso-inf-skill'>
                <div className='curso-inf-titulo'>
                  <div className='curso-skill-icono'>
                    {Iconos('telecomunicaciones')}
                  </div>
                  <h3>Habilidades Técnicas</h3>
                </div>
                <h4>Aptitudes adquiridas</h4>
                <ul>
                  <li>Diseño de Antenas</li>
                  <li>Simulación de Antenas</li>
                  <li>Tecnologias IoT</li>
                  <li>Redes LAN, WAN</li>
                  <li>Fibra Óptica, Ethernet</li>
                  <li>Mantenimiento de los Switch de distribución</li>
                </ul>
            </div>
            <div className='curso-inf-img'>
              <img src={imagenes.telecomunicaciones2} alt="Imagen Circuito Integrado" />
              <p>Telecomunicaciones</p>
            </div>
            <div className='curso-inf-skill'>
              <div className='curso-inf-titulo'>
                  <div className='curso-skill-icono'>
                    {Iconos('pc')}
                  </div>
                  <h3>Competencias Técnicas</h3>
              </div>
              <h4>Softwares</h4>
              <ul>
                <li>Antenna Magus</li>
                <li>Matlab</li>
                <li>Google Heart</li>
                <li>CST Studio Suite</li>
              </ul>
              <h4>Equipos</h4>
              <ul>
                <li>Osciloscopios</li>
                <li>Fuentes de Voltaje</li>
                <li>Multímetros</li>
                <li>Generador de señales</li>
              </ul>
            </div>
          </div>

          {/* //SECCION PROYECTOS */}
          <div className='titulos'>
            <h3>Proyectos</h3>
            <h1>Proyectos | Ingenieria en Telecomunicaciones</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>A continuación, encontrarás proyectos realizados en el campo de la Ingeniería en Telecomunicaciones, donde cada proyecto está enfocado en el diseño, desarrollo y aplicación de sistemas de comunicación. Estos proyectos son el resultado de cursos y experiencias prácticas que he completado durante mi trayectoria estudiantil y profesional.</p>
          </div>
          <div className='curso-proyecto2'>
            {/*  */}
            {/* <Curso2
                  C2_Color='color-telecomunicaciones'
                  C2_Img='pbta1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Reportes | Ventas'
                  C2_Titulo='Ventas de Video Juegos'
                  C2_Enlace='https://app.powerbi.com/view?r=eyJrIjoiMGNlOWQwYzYtZjZjYy00NTU0LWI1OTUtODA1ZjZjMzJhNzQxIiwidCI6IjNkMjg1ZTc1LTI0MDItNDAxYS1hYTgyLWIwMDI3OGY0OGE0MSIsImMiOjR9'
                  C2_Descripcion={`Ventas vs Año vs Región
                                   Ventas vs Género vs Pais
                                   Ventas vs Año vs Región`}/> */}

            <p className='msg-construccion'>"&#9888; Actualmente estamos recopilando mis proyectos más destacados, los cuales estarán disponibles próximamente en mi página. Mientras tanto, si deseas saber más, puedes consultar mi GitHub o LinkedIn para obtener más detalles sobre mi experiencia y habilidades &#128296;."</p>
          </div>

          {/* //SECCION CERTIFICADO*/}
          <div className='titulos'>
            <h3>Referencias</h3>
            <h1>Certificado | Ingenieria en Telecomunicaciones</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>En esta sección, puedes encontrar mi título universitario  de Ingeniería en Electrónica y Telecomunicaciones.</p>
          </div>
          <div className='curso-certificado'>
            <div className='curso-cert-img'>
              <img src={imagenes.certificado0} alt="" />
            </div>
            <div className='curso-cert-inf'>
              <h3>Ingenieria en Electrónica y Telecomunicaciones</h3>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('grado')}
                  </div>
                  <h4>Entidad: <span>Unach - Ecuador</span></h4>
                </div>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('date')}
                  </div>
                  <h4>Fecha: <span>Febrero 2023</span></h4>
                </div>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('pc')}
                  </div>
                  <h4>Tipo: <span>Universidad | Presencial</span></h4>
                </div>
                
              <Boton 
                    tipo='btn3'
                    enlace='https://www.senescyt.gob.ec/consulta-titulos-web/faces/vista/consulta/consulta.xhtml'
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

export default Telecomunicaciones