import iconosSvg from '../recursos/svg';
import { useState } from 'react';
import imagenes from '../../../assets/imagenes';

interface CursoProps {
  Img: string;
  Nombre: string;
  Fecha: string;
  Titulo: string;
  Descripcion: string;
  Enlace: string;
  // Otras propiedades que pueda tener tu objeto Curso
}

const Diploma = (varCurso: CursoProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageCurso: string) => {
    setSelectedImage(imageCurso);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="curso">
      <div className="curso-img">
        <img
          src={imagenes[varCurso.Img]}
          alt="Imagen Logo"
          onClick={() => handleImageClick(imagenes[varCurso.Img])}
        />
      </div>
      <div className="curso-descripcion">
        <div className="curso-datos">
          <div className="curso-datos-inf">
            {iconosSvg('web2')}
            <p>{varCurso.Nombre}</p>
          </div>
          <div className="curso-datos-inf">
            {iconosSvg('date')}
            <p>{varCurso.Fecha}</p>
          </div>
        </div>
        <h3>{varCurso.Titulo}</h3>
        <p>{varCurso.Descripcion}</p>
        <a href={varCurso.Enlace} target="_blank">Credenciales <span>&rarr;</span></a>
      </div>
      {selectedImage && (
        <div className="overlay" onClick={handleClose}>
          <img src={selectedImage} alt="Imagen Certificado" className="fullscreen-image" />
          <div className='overlay-svg'>
            <p>X</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diploma;
