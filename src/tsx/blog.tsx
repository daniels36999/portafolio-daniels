import Header from './templates/Header';
import Footer from './templates/footer';



function Blog() {


  return (
    <>
        {/* //HEADER */}
        <Header />

        <section className='seccion-servicios contenedor'>

          <div className='titulos'>
            <h3>Blog</h3>
            <h1>¡Página en Desarrollo!</h1>
            <div className="linea-efecto"></div>
          </div>

          <div className='web-construccion'>
            <img src="https://raw.githubusercontent.com/daniels36999/daniels36999/main/images/gato.gif" alt="Gato" />
            <p className='msg-construccion'>Esta página está actualmente en desarrollo &#128736;. Estamos trabajando arduamente para ofrecerte una experiencia completa y enriquecedora &#128640;. ¡Gracias por tu paciencia &#128591; y vuelve pronto para ver las novedades &#128197;!
            </p>

          </div>


        </section>

        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Blog