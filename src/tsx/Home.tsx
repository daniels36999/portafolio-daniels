//LIBRERIAS
import Header from './templates/Header';
import Footer from './templates/footer';
import About from './templates/About';
//import Cursos from './templates/Cursos';
import Seccion from './templates/seccion';
import Tarjeta from './templates/components/tarjeta';
import Tarjeta2 from './templates/components/tarjeta2';

import Seccion2 from './templates/seccion2';
import imagenes from '../assets/imagenes';
import Boton from './templates/recursos/botones';
import Arriba from './templates/recursos/arriba';
import Aptitudes from './templates/aptitudes';


function Home() {
  return (
    <>
        {/* //HEADER------------------------- */}

        <div id='mostrar-btn'>
        <Header />

        {/* //PORTADA------------------------- */}
         <section className='portada' id='portada'>
          <div className='portada-bg1'>
            <div className='portada-contenido contenedor'>
              <div className='portada-img'>
                    <Tarjeta />
                </div>
                <div className='portada-desc'>     
                    <h2 className='port-nombre'>Ing. en Electónica y Telecomunicaciones</h2>
                    <h1>Hola, Soy Daniel Yautibug </h1>
                    <p className='port-descripcion'> Ing. en Electrónica y Telecomunicaciones con una formación académica sólida y experiencia en el diseño, desarrollo y optimización de sistemas en electrónica, telecomunicaciones y desarrollo web (Front-End).</p>
                    <div className='portada-btn'>
                    </div>
                </div>
            </div>
          </div>
        </section>
        </div>
        {/* //SECCION PROGRAMACION------------------------- */}
        <About />
        
        {/* //SECCION ELECTRONICA------------------------- */}
        <Seccion
          E_Tipo='modelo1'
          E_Icono='electronica'
          E_Titulo1='Profesión'
          E_Titulo2='Ingeniero | Electrónica'
          E_Parrafo='Actualmente soy ingeniero en Electrónica y Telecomunicaciones con habilidades en diseño de PCBs, modelado 3D, instalaciones eléctricas, y mantenimiento de computadoras. Esto me permite abordar proyectos de forma integral y eficiente.'
          E_Lista1='Arduino IDE'
          E_Lista2='Proteus Desing'
          E_Lista3='Fritzing'
          E_Lista4='Circuitos Electrónicos'
          E_Lista5='Instalaciones Eléctricas'
          E_Lista6='PCB'
          E_Correo='dx.daniels14@gmail.com'
          E_Img='electronica'
          E_Titulo3='Electrónica'
          E_Msg='"La Ingeniería en Electrónica es la disciplina que transforma la ciencia en algo útil para la humanidad."'
          E_Url='/portafolio'
          E_Url2='/electronica'
        />

        {/* //SECCION TELECOMUNICACIONES------------------------- */}
        <Seccion
          E_Tipo='modelo2'
          E_Icono='telecomunicaciones'
          E_Titulo1='Profesión'
          E_Titulo2='Ingeniero | Telecomunicaciones'
          E_Parrafo='Tengo experiencia en telecomunicaciones, incluyendo mantenimiento de switches de distribución, actualización de inventarios de infraestructura, y conocimientos en redes y fibra óptica, lo que me ha permitido destacar en este campo.'
          E_Lista1='Switch, Routers'
          E_Lista2='Redes Lan'
          E_Lista3='Fíbra Óptica'
          E_Lista4='Antenas'
          E_Lista5='CST Studio, Python'
          E_Lista6='Administracion de SO.'
          E_Correo='dx.daniels14@gmail.com'
          E_Img='telecomunicaciones'
          E_Titulo3='Telecomunicaciones'
          E_Msg='"La Ingeniería en Telecomunicaciones es el motor que impulsa la comunicación global, conectando personas, culturas y negocios."'
          E_Url='/portafolio'
          E_Url2='/telecomunicaciones'
        />

        <div className='titulos contenedor'>
          <h3>Proyectos</h3>
          <h1>&#128193; Lo Mejor de mis Proyectos</h1>
          <div className="linea-efecto"></div>
        </div>

        {/* <Cursos /> */}

        <div className='portafolio-opciones contenedor'>
        <p>Aquí encontrarás mis portafolios y cursos, con una selección de mis trabajos más destacados que reflejan mi experiencia y habilidades adquiridas.</p>
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
        <div className='home-aptitud contenedor'>
          <div className='titulos'>
            <h3>Formación</h3>
            <h1>🎓 Mis Aptitudes y Competencias</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='contacto-introduccion'>
            <p>Aquí encontrarás un resumen de mis habilidades en diversas áreas, desde mi formación en Ingeniería Electrónica y Telecomunicaciones hasta competencias informáticas. Descubre cómo puedo aportar valor a través de mi perfil.</p>
          </div>
          <Aptitudes/>
          </div>


        {/* CONTACTO-------------------------------- */}
        <section className='contacto contenedor'>

          <div className='titulos'>
            <h3>Contacto</h3>
            <h1>&#128231; Ponte en contacto con Nosotros!</h1>
            <div className="linea-efecto"></div>
          </div>
          <div className='contacto-introduccion'>
            <p>Gracias por visitar mi página. Si tienes alguna pregunta, comentario o necesitas asistencia, no dudes en comunicarte conmigo. Me esforzaré por brindarte el mejor servicio posible y estaré aquí para responder a todas tus consultas.</p>
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
                  enlace='https://www.linkedin.com/in/daniels-yautibug/'
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

          {/* FLECHA PARA INICIAR DE ARRIBA--------- */}
          <Arriba />

        
        {/* //PIE DE PAGINA------------------------- */}
        <Footer />
    </>
  )
}

export default Home