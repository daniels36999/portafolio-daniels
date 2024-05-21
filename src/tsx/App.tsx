import { BrowserRouter, Routes, Route, } from "react-router-dom";
import '../css/App.css'

//PRINCIPAL
import Home from './Home';
import Portafolio from './portafolio';
import Servicios from './servicios';
import Blog from './blog';
import Mi from './mi';
import Contacto from './contacto';

//RUTA PORTAFOLIO
import Electronica from './electronica';
import Telecomunicaciones from './telecomunicaciones';
import Web from './web';
import Powerbi from './powerbi';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* PRINCIPAL */}
            <Route path="/portafolio-daniels" element={<Home />} />
            <Route path="/portafolio-daniels/portafolio" element={<Portafolio />} />
            <Route path="/portafolio-daniels/servicios" element={<Servicios />} />
            <Route path="/portafolio-daniels/blog" element={<Blog />} />
            <Route path="/portafolio-daniels/mi" element={<Mi />} />
            <Route path="/portafolio-daniels/contacto" element={<Contacto />} />

            {/* RUTAS PORTAFOLIO */}
            <Route path="/portafolio-daniels/electronica" element={<Electronica />} />
            <Route path="/portafolio-daniels/telecomunicaciones" element={<Telecomunicaciones />} />
            <Route path="/portafolio-daniels/web" element={<Web />} />
            <Route path="/portafolio-daniels/powerbi" element={<Powerbi />} />
        </Routes>     
      </BrowserRouter>      
  </div> 
  )
}

export default App
