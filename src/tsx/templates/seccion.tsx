
import { Link } from 'react-router-dom';
import Iconos from './recursos/svg';
import Tarjeta1 from './components/tarjeta1';

interface ElectronicaProps {
    E_Tipo:string;
    E_Icono:string;
    E_Titulo1:string;
    E_Titulo2:string;
    E_Parrafo:string;
    E_Lista1:string;
    E_Lista2:string;
    E_Lista3:string;
    E_Lista4:string;
    E_Lista5:string;
    E_Lista6:string;
    E_Correo:string;
    E_Img:string;
    E_Titulo3:string;
    E_Msg:string;
    E_Url:string;
    E_Url2:string;
  }
const Seccion = (varElectronica:ElectronicaProps) => {
    // Componente de imagen
    const ImagenComponente = () => {
        return (
            <div className={`about-img ${varElectronica.E_Tipo}_img`}>
                {/* <img src={imagenes[varElectronica.E_Img]} alt="Imagen Logo" /> */}
                <Tarjeta1
                    T1_Img={varElectronica.E_Img}
                    T1_Titulo= {varElectronica.E_Titulo3}
                    T1_Parrafo={varElectronica.E_Msg}
                    T1_Boton='Saber Más...'
                    T1_Url={varElectronica.E_Url2}
                />
            </div>
        );
    };
    
    // Componente de texto
    const TextoComponente = () => {
        return (
            <div className='about-contenido'>
                <div className='titulos'>
                    <h3>{Iconos(varElectronica.E_Icono)} {varElectronica.E_Titulo1}</h3> 
                    <h1>{varElectronica.E_Titulo2}</h1>
                    <div className="linea-efecto"></div>
                </div>
                <p>{varElectronica.E_Parrafo}</p>
                <div className='about-lista'>
                    <div className='about-lista1'>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>{varElectronica.E_Lista1}</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>{varElectronica.E_Lista2}</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>{varElectronica.E_Lista3}</p>
                        </div>
                    </div>
                    <div className='about-lista1'>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>{varElectronica.E_Lista4}</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>{varElectronica.E_Lista5}</p>
                        </div>
                        <div className='lista1'>
                            {Iconos('check')}
                            <p>{varElectronica.E_Lista6}</p>
                        </div>
                    </div>
                </div>
                <div className='about-contacto'>
                    <div className='ab-contacto-img'>
                        {Iconos('email2')}
                    </div>
                    <div className='ab-contacto-desc'>
                        <span>Más Información...</span>   
                        <h3>dx.daniels14@gmail.com</h3>   
                    </div>
                </div>
                <div className='about-link'>
                    <button className='btn3'>
                        <Link to={`${varElectronica.E_Url}`} > Portafolio &rarr;</Link>
                        <span className='btn3-span'></span>
                    </button>
                     
                </div>
            </div>
        );
    }; 

    return(
        <div className={`about contenedor ${varElectronica.E_Tipo}`}>
            {varElectronica.E_Tipo === "modelo1" ? (
                <>
                    <ImagenComponente />
                    <TextoComponente />
                </>
            ) : (
                <>
                    <TextoComponente />
                    <ImagenComponente />
                </>
            )}
    </div>
    );
  };

  export default Seccion