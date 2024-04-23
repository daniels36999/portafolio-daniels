import { BrowserRouter, Routes, Route, } from "react-router-dom";
import '../css/App.css'

import Home from './Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/portafolio-daniels" element={<Home />} />
        </Routes>     
      </BrowserRouter>      
  </div> 
  )
}

export default App
