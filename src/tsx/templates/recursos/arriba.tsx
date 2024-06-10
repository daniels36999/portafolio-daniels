import { useState, useEffect } from 'react';
import Iconos from './svg';

function Arriba() {
  
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = () => {
        const section = document.getElementById('footer');
        if (section) {
            const sectionTop = section.offsetTop;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    };

    const [mostrarIcono, setMostrarIcono] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Determina si se debe mostrar el icono según la posición de desplazamiento
            const scrollY = window.scrollY;
            const section = document.getElementById('mostrar-btn');
            if (section) {
                const sectionTop = 0;
                const sectionBottom = sectionTop + section.clientHeight;
                // Mostrar el icono si el usuario no está en la sección 'about'
                setMostrarIcono(!(scrollY >= sectionTop && scrollY < sectionBottom));
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {mostrarIcono && (
            <div className="arriba">

                    <a onClick={scrollToTop} className='abajo-svg scroll-icono'>
                        {Iconos('flecha_arriba')}
                    </a>
                    <a onClick={scrollToSection} className='arriba-svg scroll-icono'>
                        {Iconos('flecha_abajo')}
                    </a>
                
            </div>
            )}
         </>
    );
};

export default Arriba;
