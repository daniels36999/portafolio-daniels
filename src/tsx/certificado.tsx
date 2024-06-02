import Header from './templates/Header';
import Footer from './templates/footer';
import Tarjeta3 from './templates/components/tarjeta3';
import Diploma from './templates/components/diploma'
import imagenes from '../assets/imagenes';
import Iconos from './templates/recursos/svg';


function Certificado() {


  return (
    <>
    {/* //HEADER */}
    <Header />  

    <section className='seccion-certificado contenedor'>

        <div className='certificado-opciones'>

            <div className='titulos'>
                <h3>Certificados</h3>
                <h1>Especialidad</h1>
                <div className="linea-efecto"></div>
            </div>
            
            <Tarjeta3
                T3_Icon='electronica'
                T3_Titulo='Electrónica'
                T3_Parrafo='Certificados'
                T3_Url='electronica' />
            <Tarjeta3
                T3_Icon='telecomunicaciones'
                T3_Titulo='Telecomunicaciones'
                T3_Parrafo='Certificados'
                T3_Url='telecomunicaciones'/>
            <Tarjeta3
                T3_Icon='pc'
                T3_Titulo='Desarrollo Web'
                T3_Parrafo='Certificados'
                T3_Url='otros'/>
            <Tarjeta3
                T3_Icon='grado'
                T3_Titulo='Adicionales'
                T3_Parrafo='Certificados'
                T3_Url='otros'/>

            <div className='titulos'>
                <h3>Competencias</h3>
                <h1>Aptitudes</h1>
                <div className="linea-efecto"></div>
            </div>
            <div className='certificado-aptitudes'>
                <div className='aptitud'>{Iconos('suma')}<p>Ing. Electrónica</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Ing. Telecomunicaciones</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Instalaciones Eléctricas</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Base de Datos</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>ISO27001</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Desarrollo Web</p></div>
            </div>

            <div className='titulos'>
                <h3>Habilidades</h3>
                <h1>Informáticas</h1>
                <div className="linea-efecto"></div>
            </div>
            <div className='certificado-aptitudes'>
                <div className='aptitud'>{Iconos('suma')}<p>Autodesk Inventor</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>AutoCad</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Power BIr</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>SQL Server</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Arduino IDE</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>IBM SPSS</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>CST Studio</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Proteus Desing</p></div>
            </div>

            <div className='titulos'>
                <h3>Habilidades</h3>
                <h1>Ofimáticas</h1>
                <div className="linea-efecto"></div>
            </div>
            <div className='certificado-aptitudes'>
                <div className='aptitud'>{Iconos('suma')}<p>MS. Word</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>MS. Excel</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>MS. PowerPoint</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>MS. Visio</p></div>
                <div className='aptitud'>{Iconos('suma')}<p>Overleaf Latex</p></div>
            </div>

        </div>

        <div className='certificado-contenido'>
            <div className='titulos'>
                <h3>Certificados</h3>
                <h1>Reconocimientos y Certificaciones</h1>
                <div className="linea-efecto"></div>
            </div>

            <div className='certificado-descripcion'>
                <p>A lo largo de mi carrera estudiantil y profecional 	&#127891;, he obtenido diversas certificaciones que demuestran mi compromiso con el aprendizaje continuo y la mejora profesional &#128218;. Estas credenciales reflejan mis habilidades y conocimientos en diferentes áreas técnicas, validando mi competencia y dedicación en el campo de la Electrónica, Telecomunicaciones y el Desarrollo Web &#128187;.</p>
                <img src={imagenes.cursos} alt="Imagen Tecnologia" />
            </div>

            <div className='titulos'  id="certificados">
                <h3>Certificados</h3>
                <h1>Certificaciones de Cursos realizados</h1>
                <div className="linea-efecto"></div>
            </div>


            <div className='certificado-curso'>

                <Diploma
                    Img='certificado2'
                    Nombre='Udemy'
                    Fecha='Mayo 2024'
                    Titulo='Desarrollo Web con HTML5, CSS3, JS AJAX PHP y MySQL'
                    Descripcion='Front-End, Back-End'
                    Enlace='https://www.udemy.com/certificate/UC-1d98e2f3-c22a-45fe-a32f-c405a80652b8/'/>

                <Diploma
                    Img='certificado5'
                    Nombre='Udemy'
                    Fecha='Febrero 2024'
                    Titulo='Máster en SQL Server: Desde Cero a Nivel Profesional'
                    Descripcion='SQL Server'
                    Enlace='https://www.udemy.com/certificate/UC-f1b58b1e-73e0-4d06-a499-462c20e56158/'/>
                
                <Diploma
                    Img='certificado1'
                    Nombre='Udemy'
                    Fecha='Enero 2024'
                    Titulo='Power BI – Análisis de Datos y Business Intelligence'
                    Descripcion='Power BI, Dax'
                    Enlace='https://www.udemy.com/certificate/UC-bae29dc8-1a12-4458-893b-0d4cc36fa079/'/>

                <Diploma
                    Img='certificado3'
                    Nombre='Udemy'
                    Fecha='Diciem.. 2023'
                    Titulo='ISO/IEC 27001 Implementando Seguridad de la Información'
                    Descripcion='ISO27001'
                    Enlace='https://www.udemy.com/certificate/UC-1e858260-900f-4096-b299-d3da7a98c3c3/'/>

                <Diploma
                    Img='certificado6'
                    Nombre='Ecuador'
                    Fecha='Mayo 2023'
                    Titulo='Inteligencia Artificial, Chat GPT, Dalle; ¿Qué es?, ¿Cómo Funciona?'
                    Descripcion='Chat GPT'
                    Enlace=''/>

                <Diploma
                    Img='certificado4'
                    Nombre='Udemy'
                    Fecha='Octubre 2022'
                    Titulo='Liderazgo y Gestión de equipos | Certificación'
                    Descripcion='Gestión, Liderazgo'
                    Enlace='https://www.udemy.com/certificate/UC-b1453f69-743f-442b-adc8-04824cacab15/'/>

                <div className='titulos'>
                    <h1>¿Quieres saber más?</h1>
                    <div className="linea-efecto"></div>
                </div>

                <p>Si estás interesado en conocer más sobre mis conocimientos, habilidades, certificaciones y proyectos, no dudes en ponerte en contacto conmigo &#128100;. Estoy abierto a oportunidades laborales y emocionado por la posibilidad de contribuir con mi experiencia y pasión a nuevos desafíos &#128175;. Puedes contactarme a través del email <span>dx.daniels14@gmail.com</span> . ¡Espero saber de ti pronto &#128075;!</p>

            </div>


        </div>     


    </section>

    {/* //FOOTER*/}
    <Footer />
    </>
  );
};

export default Certificado