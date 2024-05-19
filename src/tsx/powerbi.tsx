import Header from './templates/Header';
import Footer from './templates/footer';
import Curso2 from './templates/curso2';



function Powerbi() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='curso-proyecto contenedor'>
          <div className='titulos'>
            <h3>Power BI</h3>
            <h1>Proyectos realizados en Power BI</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proyecto2'>
            {/*  */}
            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='pbta1'
                  C2_Img2='pba1'
                  C2_Nombre='Daniel'
                  C2_Fecha='Reportes | Ventas'
                  C2_Titulo='Ventas de Video Juegos'
                  C2_Enlace='https://github.com/daniels36999'
                  C2_Descripcion={`Ventas vs Año vs Región
                                   Ventas vs Género vs Pais
                                   Ventas vs Año vs Región`}/>

            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='pbtb1'
                  C2_Img2='pbb1'
                  C2_Nombre='Daniel'
                  C2_Fecha='Análisis | Categorias.'
                  C2_Titulo='Indicadores Mundiales'
                  C2_Enlace='https://github.com/daniels36999'
                  C2_Descripcion={`Análisis por Categorias
                                   Integración y Relaciones
                                   Esperanza de vida y mortalidad infantil`}/>

            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='pbtc1'
                  C2_Img2='pb1'
                  C2_Nombre='Daniel'
                  C2_Fecha='Análisis | Categorias.'
                  C2_Titulo='Reporte RRHH'
                  C2_Enlace='https://github.com/daniels36999'
                  C2_Descripcion={`Análisis por Categorias
                                   Costos totales por sueldo
                                   Evaluación de Desempeño`}/>

            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='bg'
                  C2_Img2='pb1'
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

export default Powerbi