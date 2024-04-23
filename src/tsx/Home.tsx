import Header from './templates/Header';
import Footer from './templates/footer';
import Cursos from './templates/Cursos';
import About from './templates/About';
import Electronica from './templates/Electronica';


function Home() {


  return (
    <>
        {/* //HEADER */}
        <Header />

        <About />
        <Electronica 
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
          E_Img='bg'
        />
        <Electronica 
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
          E_Img='bg'
        />

        <div className='titulos'>
          <h3>Hola soy Daniels</h3>
          <h1>Read The Latest Articles from Our Blog Post</h1>
          <div className="wobbling-2"></div>
        </div>
        <Cursos />
        

        <Footer />
    </>
  )
}

export default Home