import Testimonio from './templates/template';
import Footer from './templates/footer';



function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Shawn Wang'/>
      </div>
    </div>
  );
}

function AppFooter() {
  return (
        <Footer/>
  );
}

export {
  App,
  AppFooter
};