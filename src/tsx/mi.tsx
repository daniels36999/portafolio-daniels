import Iconos from './templates/recursos/svg';
import Header from './templates/Header';
import Footer from './templates/footer';
import imagenes from '../assets/imagenes';


function Mi() {


  return (
    <>
        {/* //HEADER */}
        <Header />    

        <section className='seccion-mi contenedor'>
          <div className='titulos'>
            <h3>Ing. en Electrónica y Telecomunicaciones</h3>
            <h1>Hola, Soy Daniel Patricio Yautibug</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='mi'>
            <div className='mi-img'>
              <img src={imagenes.foto} alt="Imagen Sobre Mi" />
            </div>
            <div className='mi-contenido'>
              <p>&#127891; Ingeniero en Electrónica y Telecomunicaciones con una sólida formación académica y experiencia en el diseño, desarrollo y optimización de diversos sistemas electrónicos y de comunicación&#129302;. También Me apasiona aplicar mis habilidades técnicas para resolver problemas complejos y contribuir al avance de la tecnología en el sector de las telecomunicaciones&#128225;.  Además, mis habilidades técnicas y personales me convierten en un activo valioso para cualquier empresa que busca soluciones innovadoras y eficientes en el ámbito de las tecnologías de la información y la comunicación&#128752;.</p>
            </div>
          </div>
          <div className='contacto-banner'>
              <div className='contacto-boton'>
                <div className='contacto-btn1'>
                    <div className='contactto-svg'>
                        {Iconos('apellido')}
                    </div>
                    <h4>Nombre: <span>Daniel Yautibug</span></h4>
                </div>
                <div className='contacto-btn1'>
                  <div className='contactto-svg'>
                     {Iconos('direccion')}
                  </div>
                  <h4>Pais: <span>Ecuador</span></h4>
                </div>
                <div className='contacto-btn1'>
                  <div className='contactto-svg'>
                    {Iconos('casa')}
                  </div>
                  <h4>Provincia: <span>Chimborazo</span></h4>
                </div>
              </div>
              <div className='contacto-img'>
                <img src={imagenes.git} alt="Imagen GitHub" />
              </div>
              <div className='contacto-boton'>
                <div className='contacto-btn1'>
                    <div className='contactto-svg'>
                      {Iconos('electronica')}
                    </div>
                  <h4>Esp: <span>Ing. Electronónica</span></h4>
                </div>
                <div className='contacto-btn1'>
                    <div className='contactto-svg'>
                      {Iconos('telecomunicaciones')}
                    </div>
                  <h4>Esp: <span>Ing. Telecomunicaciones</span></h4>
                </div>
                <div className='contacto-btn1'>
                    <div className='contactto-svg'>
                      {Iconos('pc')}
                    </div>
                  <h4>Esp: <span>Desarrollo Web</span></h4>
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