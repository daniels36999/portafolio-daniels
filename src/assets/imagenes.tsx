//IMAGENES EN GUENERAL
import logo from './img/logo.png';
import foto from './img/foto.jpg';
import bg from './img/bg.jpg';
import electronica from './img/electronica.jpg';
import telecomunicaciones from './img/telecomunicaciones.jpg';
import certificado1 from './img/certificado1.jpg';

//IMAGENES MINIATURA POWER BI
import pbta1 from './imgP/pbta1.png';
import pbtb1 from './imgP/pbtb1.jpg';
import pbtc1 from './imgP/pbtc1.jpg';
import pbtd1 from './imgP/pbtd1.png';

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
  "telecomunicaciones": telecomunicaciones,
  "certificado1": certificado1,

  //POWER BI
  //------------------------------------
  //PEQUEÑO
  "pbta1":pbta1,
  "pbtb1":pbtb1,
  "pbtc1":pbtc1,
  "pbtd1":pbtd1,

  //GRANDE
  "pba1":pba1,
  "pbb1":pbb1,
  "pbb2":pbb2

};

export default imagenes;