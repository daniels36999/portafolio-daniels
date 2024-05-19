import Header from './templates/Header';
import Footer from './templates/footer';
import Curso2 from './templates/curso2';



function Electronica() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='curso-portafolio contenedor'>
          <div className='titulos'>
            <h3>Electrónica</h3>
            <h1>Proyectos de Electrónica</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='cursos2'>
            {/*  */}
            <Curso2
                  C2_Img='bg'
                  C2_Nombre='Daniel Yautibug'
                  C2_Fecha='junio del 2024'
                  C2_Titulo='How to build a website'
                  C2_Descripcion='Dolor et eos labore stet justo sed est sed sed sed dolor stet amet'
                  C2_Enlace='https://github.com/daniels36999'/>

            <Curso2
                  C2_Img='bg'
                  C2_Nombre='Daniel Yautibug'
                  C2_Fecha='junio del 2024'
                  C2_Titulo='How to build a website'
                  C2_Descripcion='Dolor et eos labore stet justo sed est sed sed sed dolor stet amet'
                  C2_Enlace='https://github.com/daniels36999'/>

            <Curso2
                  C2_Img='bg'
                  C2_Nombre='Daniel Yautibug'
                  C2_Fecha='junio del 2024'
                  C2_Titulo='How to build a website'
                  C2_Descripcion='Dolor et eos labore stet justo sed est sed sed sed dolor stet amet'
                  C2_Enlace='https://github.com/daniels36999'/>

            <Curso2
                  C2_Img='bg'
                  C2_Nombre='Daniel Yautibug'
                  C2_Fecha='junio del 2024'
                  C2_Titulo='How to build a website'
                  C2_Descripcion='Dolor et eos labore stet justo sed est sed sed sed dolor stet amet'
                  C2_Enlace='https://github.com/daniels36999'/>

          </div>
        </div>

        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Electronica