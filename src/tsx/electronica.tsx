import Header from './templates/Header';
import Footer from './templates/footer';
// import Curso2 from './templates/curso2';
import imagenes from '../assets/imagenes';
import Iconos from './templates/recursos/svg';
import Boton from './templates/recursos/botones';



function Electronica() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='curso-proyecto contenedor'>

          {/* //SECCION DESCRIPCION */}
          <div className='titulos'>
            <h3>Electrónica</h3>
            <h1>Ingenieria en Electrónica</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>La ingeniería en electrónica es una rama de la ingeniería que se enfoca en el diseño, desarrollo y aplicación de dispositivos y sistemas electrónicos. Involucra el estudio de componentes y circuitos electrónicos para su uso en comunicaciones, computación, automatización, robótica e instrumentación. Los ingenieros electrónicos trabajan con tecnología de punta para crear soluciones innovadoras en diversos campos, desde sistemas embebidos hasta telecomunicaciones y control de procesos industriales.</p>
          </div>
          <div className='curso-informacion'>
            <div className='curso-inf-skill'>
                <div className='curso-inf-titulo'>
                  <div className='curso-skill-icono'>
                    {Iconos('electronica')}
                  </div>
                  <h3>Habilidades Técnicas</h3>
                </div>
                <h4>Aptitudes adquiridas</h4>
                <ul>
                  <li>Diseño de Circuitos Impresos PCB. </li>
                  <li>Diseño de Planos Electricos</li>
                  <li>Diseño 3D de piezas</li>
                  <li>Simulaciones de Circuitos</li>
                  <li>Pruebas de Continuidad de Circuitos</li>
                  <li>Mantenimiento de Equipos Elec.</li>
                </ul>
            </div>
            <div className='curso-inf-img'>
              <img src={imagenes.electronica2} alt="Imagen Circuito Integrado" />
              <p>Electrónica</p>
            </div>
            <div className='curso-inf-skill'>
              <div className='curso-inf-titulo'>
                  <div className='curso-skill-icono'>
                    {Iconos('multimetro')}
                  </div>
                  <h3>Competencias Técnicas</h3>
              </div>
              <h4>Softwares</h4>
              <ul>
                <li>Proteus, Fritzing</li>
                <li>Arduino IDE</li>
                <li>AutoCad, AutoDesk Inventor</li>
                <li>Unity 3D</li>
              </ul>
              <h4>Equipos</h4>
              <ul>
                <li>Osciloscopios</li>
                <li>Fuentes de Voltaje</li>
                <li>Multímetros</li>
                <li>Protoboard</li>
              </ul>
            </div>
          </div>

          {/* //SECCION PROYECTOS */}
          <div className='titulos'>
            <h3>Proyectos</h3>
            <h1>Proyectos | Ingenieria en Electrónica</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>A continuación, encontrarás proyectos realizados en el campo de la Ingeniería en Electrónica, donde cada proyecto está enfocado en el diseño, desarrollo y aplicación de sistemas electrónicos. Estos proyectos son el resultado de cursos y experiencias prácticas que he completado durante mi trayectoria estudiantil y profesional.</p>
          </div>
          <div className='curso-proyecto2'>
            {/*  */}
            {/* <Curso2
                  C2_Color='color-electronica'
                  C2_Img='pbta1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Reportes | Ventas'
                  C2_Titulo='Ventas de Video Juegos'
                  C2_Enlace='https://app.powerbi.com/view?r=eyJrIjoiMGNlOWQwYzYtZjZjYy00NTU0LWI1OTUtODA1ZjZjMzJhNzQxIiwidCI6IjNkMjg1ZTc1LTI0MDItNDAxYS1hYTgyLWIwMDI3OGY0OGE0MSIsImMiOjR9'
                  C2_Descripcion={`Ventas vs Año vs Región
                                   Ventas vs Género vs Pais
                                   Ventas vs Año vs Región`}/> */}

            <p className='msg-construccion'>"&#9888; Actualmente estamos recopilando mis proyectos más destacados, los cuales estarán disponibles próximamente en mi página. Muy pronto podrás explorar el trabajo que he realizado a lo largo de mi carrera y en los cursos que he completado &#128218;. Mientras tanto, si deseas saber más, puedes consultar mi GitHub o LinkedIn para obtener más detalles sobre mi experiencia y habilidades &#128296;."</p>
          </div>

          {/* //SECCION CERTIFICADO*/}
          <div className='titulos'>
            <h3>Referencias</h3>
            <h1>Certificado | Ingenieria en Electrónica</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>En esta sección, puedes encontrar mi título universitario  de Ingeniería en Electrónica y Telecomunicaciones. Esta trayectoria universitaria me permitió adquirir competencias en el diseño y desarrollo de sistemas electrónicos y de telecomunicaciones, aprendiendo a implementar y optimizar circuitos, así como a manejar tecnologías de comunicación avanzada.</p>
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

export default Electronica