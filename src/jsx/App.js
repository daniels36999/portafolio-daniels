import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './componentes/home';
import Nosotros from './componentes/nosotros';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
      </Routes>     
      </BrowserRouter>      
    </div>
  );
}

export default App;