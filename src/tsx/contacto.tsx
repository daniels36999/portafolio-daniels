import Header from './templates/Header';
import Footer from './templates/footer';
import Seccion2 from './templates/seccion2';
import imagenes from '../assets/imagenes';
import Boton from './templates/recursos/botones';



function Contacto() {


  return (
    <>
        {/* //HEADER */}
        <Header />

          <section className='contacto contenedor'>

            <div className='titulos'>
              <h3>Contacto</h3>
              <h1>Ponte en contacto con Nosotros!</h1>
              <div className="linea-efecto"></div>
            </div>
            <div className='contacto-introduccion'>
              <p>Gracias por visitar nuestra página de contacto. Si tienes alguna pregunta, comentario o necesitas asistencia, no dudes en comunicarte con nosotros. Nos esforzamos por brindar el mejor servicio posible y estamos aquí para responder a todas tus consultas.</p>
            </div>
            <div className='contacto-banner'>
              <div className='contacto-boton'>
                <div className='contacto-btn1'>
                  <Boton 
                        tipo='btn1'
                        enlace='https://daniels36999.github.io/portafolio-daniels/'
                        svg='web'
                        clase=''
                        nombre=''/>
                  <p>Portafolio</p>
                </div>
                <div className='contacto-btn1'>
                  <Boton 
                    tipo='btn1'
                    enlace='https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/'
                    svg='linkedin'
                    clase=''
                    nombre=''/>
                    <p>LinkedIn</p>
                </div>
              </div>
              <div className='contacto-img'>
                <img src={imagenes.git} alt="Imagen GitHub" />
              </div>
              <div className='contacto-boton'>
                <div className='contacto-btn1'>
                  <Boton 
                        tipo='btn1'  
                        enlace='https://grabcad.com/daniel.patricio.yautibug-1'
                        svg='grabcad'
                        clase=''
                        nombre=''/>
                  <p>GrabCad</p>
                </div>
                <div className='contacto-btn1'>
                  <Boton 
                      tipo='btn1'
                      enlace='https://github.com/daniels36999/'
                      svg='github'
                      clase=''
                      nombre=''/>
                  <p>GitHub</p>
                  </div>
                </div>
            </div>
            <Seccion2
            />

          </section>

        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Contacto