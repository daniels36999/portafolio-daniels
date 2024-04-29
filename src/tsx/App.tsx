import { BrowserRouter, Routes, Route, } from "react-router-dom";
import '../css/App.css'

import Home from './Home';
import Portafolio from './portafolio';
import Servicios from './servicios';
import Blog from './blog';
import Mi from './mi';
import Contacto from './contacto';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/portafolio-daniels" element={<Home />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mi" element={<Mi />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>     
      </BrowserRouter>      
  </div> 
  )
}

export default App
