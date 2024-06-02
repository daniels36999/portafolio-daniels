import Header from './templates/Header';
import Footer from './templates/footer';
import Curso2 from './templates/curso2';
import imagenes from '../assets/imagenes';
import Iconos from './templates/recursos/svg';
import Boton from './templates/recursos/botones';



function Powerbi() {


  return (
    <>
        {/* //HEADER */}
        <Header />
        <div className='curso-proyecto contenedor'>

          {/* //SECCION DESCRIPCION */}
          <div className='titulos'>
            <h3>Power BI</h3>
            <h1>Análisis de Datos y Business Intelligence</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>Power BI: Es una plataforma de análisis de datos y business intelligence de Microsoft que permite conectar, transformar y visualizar datos de múltiples fuentes. Facilita la creación de informes interactivos y paneles de control, proporcionando insights en tiempo real para la toma de decisiones informadas.</p>
          </div>
          <div className='curso-informacion'>
            <div className='curso-inf-skill'>
                <div className='curso-inf-titulo'>
                  <div className='curso-skill-icono'>
                    {Iconos('analisis')}
                  </div>
                  <h3>Análisis de Datos</h3>
                </div>
                <p>El Análisis de Datos es el proceso de examinar y transformar datos para descubrir información útil y apoyar la toma de decisiones, utilizando técnicas estadísticas y de minería de datos. </p>
                <h4>Aptitudes adquiridas</h4>
                <ul>
                  <li>Visualización dinámica de datos</li>
                  <li>Modelado de Datos</li>
                  <li>Tablas de calendario</li>
                  <li>Query Editor</li>
                </ul>
            </div>
            <div className='curso-inf-img'>
              {Iconos('powerbi2')}
              <p>Power BI</p>
            </div>
            <div className='curso-inf-skill'>
              <div className='curso-inf-titulo'>
                <div className='curso-skill-icono'>
                  {Iconos('data')}
                </div>
                <h3>B. Intelligence</h3>
              </div>
              <p>Es un conjunto de tecnologías y prácticas que analizan datos empresariales para proporcionar información precisa y oportuna, mejorando la eficiencia operativa y desarrollando estrategias efectivas.</p>
              <h4>Aptitudes adquiridas</h4>
              <ul>
                <li>DAX con Power BI</li>
                <li>Visualización de KPI</li>
                <li>Power BI Desktop</li>
                <li>Power BI Mobile</li>
              </ul>
            </div>
          </div>

          {/* //SECCION PROYECTOS */}
          <div className='titulos'>
            <h3>Proyectos</h3>
            <h1>Proyectos realizados en Power BI</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>A continuación, encontrarás proyectos realizados en Power BI, donde cada proyecto está enfocado en el análisis de datos y el business intelligence. Estos proyectos son el resultado de cursos que he completado durante mi trayectoria estudiantil y profesional.</p>
          </div>
          <div className='curso-proyecto2'>
            {/*  */}
            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='pbta1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Reportes | Ventas'
                  C2_Titulo='Ventas de Video Juegos'
                  C2_Enlace='https://app.powerbi.com/view?r=eyJrIjoiMGNlOWQwYzYtZjZjYy00NTU0LWI1OTUtODA1ZjZjMzJhNzQxIiwidCI6IjNkMjg1ZTc1LTI0MDItNDAxYS1hYTgyLWIwMDI3OGY0OGE0MSIsImMiOjR9'
                  C2_Descripcion={`Ventas vs Año vs Región
                                   Ventas vs Género vs Pais
                                   Ventas vs Año vs Región`}/>

            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='pbtb1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Análisis | DAX'
                  C2_Titulo='Indicadores Mundiales'
                  C2_Enlace='https://app.powerbi.com/view?r=eyJrIjoiYTRlZmQ3MGMtNjNjZi00Y2RiLTllZjUtZWEyN2I1YWZlZjc5IiwidCI6IjNkMjg1ZTc1LTI0MDItNDAxYS1hYTgyLWIwMDI3OGY0OGE0MSIsImMiOjR9'
                  C2_Descripcion={`Análisis por Categorias
                                   Integración y Relaciones
                                   Esperanza de vida y mortalidad infantil`}/>

            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='pbtc1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Análisis | DAX'
                  C2_Titulo='Reporte RRHH'
                  C2_Enlace='https://app.powerbi.com/view?r=eyJrIjoiZDMyNDQ4MzctNGIxMy00NGMwLTgzMjQtMzQyMjNkNWRhMDFmIiwidCI6IjNkMjg1ZTc1LTI0MDItNDAxYS1hYTgyLWIwMDI3OGY0OGE0MSIsImMiOjR9'
                  C2_Descripcion={`Análisis por Categorias
                                   Costos totales por sueldo
                                   Evaluación de Desempeño`}/>

            <Curso2
                  C2_Color='color-powerbi'
                  C2_Img='pbtd1'
                  C2_Nombre='Daniel 2024'
                  C2_Fecha='Análisis | DAX'
                  C2_Titulo='Finanzas Personales'
                  C2_Enlace='https://app.powerbi.com/view?r=eyJrIjoiOWUwZDAwOTctNGUyYS00YzhjLTllZmYtYjVlN2JiMzBhNGMzIiwidCI6IjNkMjg1ZTc1LTI0MDItNDAxYS1hYTgyLWIwMDI3OGY0OGE0MSIsImMiOjR9'
                  C2_Descripcion={`Ingresos, Utilidad, Saldo
                                   Metas, Presupuesto, Esp. Financiera
                                   Reportes de Finanzas Personales`}/>

            <p className='msg-construccion'>"&#9888; Actualmente estamos recopilando mis proyectos más destacados, los cuales estarán disponibles próximamente en mi página. Muy pronto podrás explorar el trabajo que he realizado a lo largo de mi carrera y en los cursos que he completado &#128218;. Mientras tanto, si deseas saber más, puedes consultar mi GitHub o LinkedIn para obtener más detalles sobre mi experiencia y habilidades &#128296;."</p>

          </div>

          {/* //SECCION CERTIFICADO*/}
          <div className='titulos'>
            <h3>Referencias</h3>
            <h1>Certificado | Power BI</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='curso-proy-descripcion'>
            <p>En esta sección, puedes encontrar mi certificado del curso de Power BI. Este curso me permitió adquirir competencias en análisis de datos y business intelligence, aprendiendo a utilizar Power BI para crear visualizaciones interactivas y paneles de control eficaces.</p>
          </div>
          <div className='curso-certificado'>
            <div className='curso-cert-img'>
              <img src={imagenes.certificado1} alt="" />
            </div>
            <div className='curso-cert-inf'>
              <h3>Power BI – Análisis de Datos y Business Intelligence</h3>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('udemy')}
                  </div>
                  <h4>Entidad: <span>Udemy</span></h4>
                </div>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('date')}
                  </div>
                  <h4>Fecha: <span>Enero 2024</span></h4>
                </div>
                <div className='curso-cert-cont'>
                  <div className='curso-skill-icono'>
                      {Iconos('pc')}
                  </div>
                  <h4>Tipo: <span>Curso Online</span></h4>
                </div>
                
              <Boton 
                    tipo='btn3'
                    enlace='https://www.udemy.com/certificate/UC-bae29dc8-1a12-4458-893b-0d4cc36fa079/'
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

export default Powerbi