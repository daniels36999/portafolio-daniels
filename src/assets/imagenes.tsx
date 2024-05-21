//IMAGENES EN GUENERAL
import logo from './img/logo.png';
import foto from './img/foto.jpg';
import bg from './img/bg.jpg';
import electronica from './img/electronica.jpg';
import electronica2 from './img/electronica2.png';
import telecomunicaciones from './img/telecomunicaciones.jpg';
import telecomunicaciones2 from './img/telecomunicaciones2.png';
import certificado0 from './img/certificado0.jpg';
import certificado1 from './img/certificado1.jpg';
import certificado2 from './img/certificado2.jpg';

//IMAGENES MINIATURA POWER BI
import pbta1 from './imgP/pbta1.png';
import pbtb1 from './imgP/pbtb1.jpg';
import pbtc1 from './imgP/pbtc1.jpg';
import pbtd1 from './imgP/pbtd1.png';

import wbta1 from './imgP/wbta1.jpg';
import wbtb1 from './imgP/wbtb1.jpg';
import wbtc1 from './imgP/wbtc1.jpg';

//IMAGENES NORMAL POWER BI
import pba1 from './imgG/pba1.png';
import pbb1 from './imgG/pbb1.jpg';
import pbb2 from './imgG/pbb2.jpg';



const imagenes : { [key: string]: string } = {
  //IMAGENES
  "logo": logo,
  "foto": foto,
  "bg": bg,
  "electronica": electronica,
  "electronica2": electronica2,
  "telecomunicaciones": telecomunicaciones,
  "telecomunicaciones2": telecomunicaciones2,
  "certificado0": certificado0,
  "certificado1": certificado1,
  "certificado2": certificado2,

  //POWER BI
  //------------------------------------
  //PEQUEÑO
  "pbta1":pbta1,
  "pbtb1":pbtb1,
  "pbtc1":pbtc1,
  "pbtd1":pbtd1,

  "wbta1":wbta1,
  "wbtb1":wbtb1,
  "wbtc1":wbtc1,

  //GRANDE
  "pba1":pba1,
  "pbb1":pbb1,
  "pbb2":pbb2

};

export default imagenes;