import Iconos from './templates/recursos/svg';

import Header from './templates/Header';
import Footer from './templates/footer';
import imagenes from '../assets/imagenes';



function Mi() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='seccion-titulo'>
            <h1>Sobre Mi</h1>
        </div>
        

        <section className='mi contenedor'>
          <div className='mi-img'>
            <img src={imagenes.foto} alt="Imagen Sobre Mi" />

          </div>
          <div className='mi-contenido'>
            <div className='titulos'>
                <h3>Ingeniero en Electrónica y Telecomunicaciones</h3>
                <h1>Hola, Soy Daniel Patricio Yautibug</h1>
                <div className="linea-efecto"></div>
            </div>

            <p>Ingeniero en Electrónica y Telecomunicaciones con una sólida formación académica y experiencia en el diseño, desarrollo y optimización de diversos sistemas electrónicos y de comunicación. También Me apasiona aplicar mis habilidades técnicas para resolver problemas complejos y contribuir al avance de la tecnología en el sector de las telecomunicaciones.  Además, mis habilidades técnicas y personales me convierten en un activo valioso para cualquier empresa que busca soluciones innovadoras y eficientes en el ámbito de las tecnologías de la información y la comunicación.</p>

            <div className='mi-datos'>
              <div className='mi-datos1'>
                <div className='mi-lista'> {Iconos('user')} <p> Nombre: <span>Daniel Yautibug</span></p></div>
                <div className='mi-lista'> {Iconos('direccion')} <p> Pais: <span>Ecuador</span></p></div>
                <div className='mi-lista'> {Iconos('casa')} <p> Provincia: <span>Chimborazo</span></p></div>
              </div>
              <div className='mi-datos1'>
                <div className='mi-lista'> {Iconos('electronica')} <p> Especialidad: <span>Ing. Electrónica</span></p></div>
                <div className='mi-lista'> {Iconos('telecomunicaciones')} <p> Especialidad: <span>Ing. Telecomunicaciones</span></p></div>
                <div className='mi-lista'> {Iconos('pc')} <p> Especialidad: <span>Desarrollo Web | Front-End</span></p></div>
              </div>

            </div>

          </div>

        </section>

        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Mi