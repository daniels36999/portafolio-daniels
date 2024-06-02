import Header from './templates/Header';
import Footer from './templates/footer';
import imagenes from '../assets/imagenes';



function Servicios() {


  return (
    <>
        {/* //HEADER */}
        <Header />

        <section className='seccion-servicios contenedor'>

          <div className='titulos'>
            <h3>Servicios</h3>
            <h1>¡Página en Desarrollo!</h1>
            <div className="linea-efecto"></div>
          </div>

          <p className='msg-construccion'>Esta página está actualmente en desarrollo. Estamos trabajando arduamente para ofrecerte una experiencia completa y enriquecedora. ¡Gracias por tu paciencia y vuelve pronto para ver las novedades!</p>

          <div className='web-construccion'>
            <img src={imagenes.construccion} alt="" />
          </div>

          
        </section>
        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Servicios