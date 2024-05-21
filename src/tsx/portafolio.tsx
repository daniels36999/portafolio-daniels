import Header from './templates/Header';
import Footer from './templates/footer';
import Tarjeta2 from './templates/components/tarjeta2';



function Portafolio() {


  return (
    <>
        {/* //HEADER */}
        <Header />

        <h1>Portafolio</h1>
        <div className='portafolio-opciones contenedor'>
          {/*  */}
          <Tarjeta2 
            T2_Titulo='Desarrollo Web | Front-End'
            T2_Icon1='pc'
            T2_Icon2='row2D'
            T2_Icon3='row2I'
            T2_img='wbtb1'
            T2_Parrafo='Aquí encontrarás proyectos relacionados con el'
            T2_Url='/portafolio-daniels/web'
          />
          <Tarjeta2 
            T2_Titulo='Power BI'
            T2_Icon1='user'
            T2_Icon2='row2D'
            T2_Icon3='row2I'
            T2_img='pbta1'
            T2_Parrafo='En esta sección, encontrarás proyectos relacionados con análisis de datos e inteligencia empresarial en'
            T2_Url='/portafolio-daniels/powerbi'
          />

          <Tarjeta2 
            T2_Titulo='Electrónica'
            T2_Icon1='electronica'
            T2_Icon2='row2D'
            T2_Icon3='row2I'
            T2_img='electronica'
            T2_Parrafo='En esta sección encontrarás proyectos relacionados con el área de la'
            T2_Url='/portafolio-daniels/electronica'
          />
          <Tarjeta2 
            T2_Titulo='Telecomunicaciones'
            T2_Icon1='telecomunicaciones'
            T2_Icon2='row2D'
            T2_Icon3='row2I'
            T2_img='telecomunicaciones'
            T2_Parrafo='Aquí encontrarás proyectos relacionados con el área de las'
            T2_Url='/portafolio-daniels/telecomunicaciones'
          />
        </div>

        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Portafolio