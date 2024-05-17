import { Link } from 'react-router-dom';

import iconosSvg from '../recursos/svg'
import imagenes from '../../../assets/imagenes';

interface Tarjeta2Props {
    T2_Icon1: string;
    T2_Icon2: string;
    T2_Icon3: string;
    T2_img: string;
    T2_Titulo: string;
    T2_Parrafo:string;
    T2_Url:string;
  }

function Tarjeta2(varTarjeta2: Tarjeta2Props) {
  return (
    <>
        {/*  */}
        <div className="card2">
          <div className="top-section">
            <div className="border"></div>
            <div className="icons2">
              <div className="logo">
                {iconosSvg(varTarjeta2.T2_Icon1)}
              </div>
              <div className="social-media">
                {iconosSvg(varTarjeta2.T2_Icon3)}
                {iconosSvg(varTarjeta2.T2_Icon2)}
              </div>
            </div>
            <div className='card2-img'>
                <img src={imagenes[varTarjeta2.T2_img]} alt="Imagen Logo" />
            </div>
          </div>
          <div className="bottom-section">
            <h3>{varTarjeta2.T2_Titulo}</h3>
            <p>{varTarjeta2.T2_Parrafo} <span>{varTarjeta2.T2_Titulo}.</span></p>
              <Link to={varTarjeta2.T2_Url}>
                <button className="btn4" id="btn">
                  Saber Más...
                </button>
              </Link>
          </div>
        </div>
    </>
  );
}

export default Tarjeta2