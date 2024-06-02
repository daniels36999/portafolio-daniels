//import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import '../css/App.css'

//PRINCIPAL
import Home from './Home';
import Portafolio from './portafolio';
import Servicios from './servicios';
import Blog from './blog';
import Mi from './mi';
import Contacto from './contacto';
import Certificado from './certificado';

//RUTA PORTAFOLIO
import Electronica from './electronica';
import Telecomunicaciones from './telecomunicaciones';
import Web from './web';
import Powerbi from './powerbi';


function App() {

  return (
    <div>
      <HashRouter>
      {/* <BrowserRouter> */}
        <Routes>
          {/* PRINCIPAL */}
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mi" element={<Mi />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/certificado" element={<Certificado />} />

            {/* RUTAS PORTAFOLIO */}
            <Route path="/electronica" element={<Electronica />} />
            <Route path="/telecomunicaciones" element={<Telecomunicaciones />} />
            <Route path="/web" element={<Web />} />
            <Route path="/powerbi" element={<Powerbi />} />
        </Routes>     
      {/* </BrowserRouter>  */}
      </HashRouter>     
  </div> 
  )
}

export default App
