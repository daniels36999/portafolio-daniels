import { BrowserRouter, Routes, Route, } from "react-router-dom";

//import App from './jsx/App';
import '../css/App.css';

import Home from './componentes/home';
import Nosotros from './componentes/nosotros';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/portafolio-daniels" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
      </Routes>     
      </BrowserRouter>      
    </div>
  );
}

export default App;