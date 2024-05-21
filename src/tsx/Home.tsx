//LIBRERIAS
import Header from './templates/Header';
import Footer from './templates/footer';
import About from './templates/About';
import Cursos from './templates/Cursos';
import Seccion from './templates/seccion';
import Tarjeta from './templates/components/tarjeta';


function Home() {
  return (
    <>
        {/* //HEADER------------------------- */}
        <Header />

        {/* //PORTADA------------------------- */}
         <section className='portada'>
          <div className='portada-bg1'>
            <div className='portada-contenido contenedor'>
              <div className='portada-img'>
                    <Tarjeta />
                </div>
                <div className='portada-desc'>     
                    <h2 className='port-nombre'>Ing. en Electónica y Telecomunicaciones</h2>
                    <h1>Hola, Soy Daniel Yautibug </h1>
                    <p className='port-descripcion'> Ingeniero en Electrónica y Telecomunicaciones con una formación académica sólida y experiencia en el diseño, desarrollo y optimización de sistemas en electrónica, telecomunicaciones y desarrollo web (Front-End).</p>
                    <div className='portada-btn'>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* //SECCION PROGRAMACION------------------------- */}
        <About />

        {/* //SECCION ELECTRONICA------------------------- */}
        <Seccion
          E_Tipo='modelo1'
          E_Icono='electronica'
          E_Titulo1='Profesión'
          E_Titulo2='Ingeniero | Electrónica'
          E_Parrafo='En la actualidad soy ingeniero en Electrónica y Telecomunicaciones con habilidades destacadas en el diseño y construcción de circuitos impresos PCB, diseño 3D de piezas con creación de planos técnicos, instalaciones electricas y mantenimiento preventivo y correctivo de computadoras (software y hardware). Estas habilidades, junto con otras adquiridas a lo largo de mi carrera estudiantil y profesional, me permiten abordar proyectos de manera integral y eficiente.'
          E_Lista1='Arduino IDE'
          E_Lista2='Proteus Desing'
          E_Lista3='Fritzing'
          E_Lista4='Circuitos Electrónicos'
          E_Lista5='Instalaciones Eléctricas'
          E_Lista6='PCB'
          E_Correo='dyautibug.fie@unach.edu.ec'
          E_Img='electronica'
          E_Titulo3='Electrónica'
          E_Msg='"La Ingeniería en Electrónica es la disciplina que transforma la ciencia en algo útil para la humanidad."'
          E_Url='/portafolio-daniels/portafolio'
        />

        {/* //SECCION TELECOMUNICACIONES------------------------- */}
        <Seccion
          E_Tipo='modelo2'
          E_Icono='telecomunicaciones'
          E_Titulo1='Profesión'
          E_Titulo2='Ingeniero | Telecomunicaciones'
          E_Parrafo='"Mi experiencia en el área de las telecomunicaciones incluye la revisión y mantenimiento de Switches de distribución, la actualización de inventarios de equipos de infraestructura y conocimientos en redes y fibra optica. Estas habilidades, junto con otras adquiridas en mi carrera estudiantil y profesional, me han permitido destacar en el campo de las telecomunicaciones.'
          E_Lista1='Switch, Routers'
          E_Lista2='Redes Lan'
          E_Lista3='Fíbra Óptica'
          E_Lista4='Antenas'
          E_Lista5='CST Studio, Python'
          E_Lista6='Administracion de SO.'
          E_Correo='dyautibug.fie@unach.edu.ec'
          E_Img='telecomunicaciones'
          E_Titulo3='Telecomunicaciones'
          E_Msg='"La Ingeniería en Telecomunicaciones es el motor que impulsa la comunicación global, conectando personas, culturas y negocios."'
          E_Url='/portafolio-daniels/portafolio'
        />

        <div className='titulos'>
          <h3>Proyectos</h3>
          <h1>Lo Mejor de mis Proyectos</h1>
          <div className="linea-efecto"></div>
        </div>
        <Cursos />
        
        {/* //PIE DE PAGINA------------------------- */}
        <Footer />
    </>
  )
}

export default Home