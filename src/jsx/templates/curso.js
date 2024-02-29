import React from 'react';
import imagenes from '../../assets/imagenes';
import getIcon from './recursos/iconos';

const Curso = (varCurso) => {

    const clicEnlace = (url) => {
        window.open(url, '_blank');
      };

    
    return (
        <div className='cursos-progra'>
            <div>
                <button onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')} className="curso-btn"> 
                        <img src={imagenes[varCurso.imagen]} alt="Imagen Logo" />
                </button>
            </div>
            <div>
                <h2>{varCurso.titulo}</h2>
                <p>{varCurso.descripcion}</p>
            </div>
            <div>
                {varCurso.enlaces.map((enlaces, index) => (
                    <button key={index}>{enlaces}</button>
                ))}
            </div>
            <div className='curso-btn-tecnologia'>
                {varCurso.tecnologias.map((tecnologia, index) => (
                    <button className={tecnologia} key={index}>
                        {getIcon('web')}
                        <p class="text">{tecnologia}</p>
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Curso;