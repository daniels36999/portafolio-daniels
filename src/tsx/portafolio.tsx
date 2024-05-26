import Header from './templates/Header';
import Footer from './templates/footer';
import Tarjeta2 from './templates/components/tarjeta2';



function Portafolio() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='seccion-portafolio  contenedor'>   

          <div className='titulos'>
            <h3>Portafolio Digital</h3>
            <h1>Ing. Electrónica y Telecomunicaciones | Desarrollo Web</h1>
            <div className="linea-efecto"></div>
          </div>

          <div className='portafolio-descripcion'>
            <p>A continuación, puedes encontrar mis portafolios digitales &#128218;, donde se presentan proyectos y trabajos realizados durante mi trayectoria estudiantil y profesional. Además, podrás explorar proyectos relacionados con el desarrollo web &#128187;, así como análisis de datos y business intelligence utilizando Power BI &#128200;. Estos portafolios demuestran mis habilidades y conocimientos en ingeniería electrónica y telecomunicaciones, junto con mi capacidad para desarrollar soluciones web y analizar datos para la toma de decisiones estratégicas. &#128640;</p>
          </div>

          <div className='portafolio-opciones'>
            {/*  */}
            <Tarjeta2 
              T2_Titulo='Desarrollo Web | Front-End'
              T2_Icon1='pc'
              T2_Icon2='row2D'
              T2_Icon3='row2I'
              T2_img='wbtb1'
              T2_Parrafo='Aquí encontrarás proyectos relacionados con el'
              T2_Url='/web'
            />
            <Tarjeta2 
              T2_Titulo='Power BI'
              T2_Icon1='user'
              T2_Icon2='row2D'
              T2_Icon3='row2I'
              T2_img='pbta1'
              T2_Parrafo='En esta sección, encontrarás proyectos relacionados con análisis de datos e inteligencia empresarial en'
              T2_Url='/powerbi'
            />

            <Tarjeta2 
              T2_Titulo='Electrónica'
              T2_Icon1='electronica'
              T2_Icon2='row2D'
              T2_Icon3='row2I'
              T2_img='electronica'
              T2_Parrafo='En esta sección encontrarás proyectos relacionados con el área de la'
              T2_Url='/electronica'
            />
            <Tarjeta2 
              T2_Titulo='Telecomunicaciones'
              T2_Icon1='telecomunicaciones'
              T2_Icon2='row2D'
              T2_Icon3='row2I'
              T2_img='telecomunicaciones'
              T2_Parrafo='Aquí encontrarás proyectos relacionados con el área de las'
              T2_Url='/telecomunicaciones'
            />
          </div>
        </div>

        {/* //FOOTER*/}
        <Footer />
    </>
  )
}

export default Portafolio