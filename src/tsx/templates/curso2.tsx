import { useState } from 'react';
import iconosSvg from './recursos/svg'

import imagenes from '../../assets/imagenes';

interface Curso2Props {
    C2_Color: string;
    C2_Img: string;
    C2_Nombre: string;
    C2_Fecha:string;
    C2_Titulo:string;
    C2_Descripcion:string;
    C2_Enlace:string;
    // Otras propiedades que pueda tener tu objeto Curso
  }

const Curso2 = (varCurso: Curso2Props) => {
    const descripcionEnLineas = varCurso.C2_Descripcion.split('\n');

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>('');
  
    // const handleClick = (url: string) => {
    //   setImageUrl(url);
    //   setIsOpen(true);
    // };
  
    const closeOverlay = () => {
      setIsOpen(false);
      setImageUrl('');
    };
    return(
        <>
        <div className={`curso2 ${varCurso.C2_Color}`}>
            <div className="curso2-img">
                <a>
                    <img src={imagenes[varCurso.C2_Img]} alt={`Imagen ${varCurso.C2_Img}`} />
                </a>
            </div>
            <div className="curso2-descripcion">
                <div className="curso2-datos">
                    <div className='curso2-datos-inf'>
                        {iconosSvg('user')}
                        <p>{varCurso.C2_Nombre}</p>
                    </div>
                    <div className='curso2-datos-inf'>
                        {iconosSvg('pc')}
                        <p>{varCurso.C2_Fecha}</p>
                    </div>
                </div>
                <h3>{varCurso.C2_Titulo}</h3>
                <div className='curso2-informacion'>
                    <p>&#128225; Descripción:</p>
                    <div>
                        {descripcionEnLineas.map((linea, index) => (
                            <p key={index} className='curso2-inf'>&#9989; {linea}</p>
                        ))}
                    </div>
                </div>
                <a href={varCurso.C2_Enlace} target="_blank" rel="noopener noreferrer">Leer Mas <span>&rarr;</span></a>
            </div>
        </div >
        {/* FUNCION DE SUPERPONER */}
        {isOpen && (
            <div className="superponer" onClick={closeOverlay}>
                <div className="img-superponer">
                    <img src={imageUrl} alt="Imagen" />
                </div>
            </div>
        )}
        </>
    );
  };
  
  export default Curso2