import { useState } from 'react';

const Superposicion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleClick = (url: string) => {
    setImageUrl(url);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
    setImageUrl('');
  };

  return (
    <div className="superposicion">
      <h1>Galería de Imágenes</h1>
      <a href="#" onClick={() => handleClick('https://via.placeholder.com/600')}>Ver Imagen</a>

      {isOpen && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="image-container">
            <img src={imageUrl} alt="Imagen" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Superposicion;
