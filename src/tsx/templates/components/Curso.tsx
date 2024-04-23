import { Link } from 'react-router-dom';
import iconosSvg from '../recursos/svg'

import imagenes from '../../../assets/imagenes';

interface CursoProps {
    Img: string;
    Nombre: string;
    Fecha:string;
    Titulo:string;
    Descripcion:string;
    Enlace:string;
    // Otras propiedades que pueda tener tu objeto Curso
  }

const Curso = (varCurso: CursoProps) => {

    return(
        <div className="curso">
            <div className="curso-img">
                <Link to="/daniels" >
                    <img src={imagenes[varCurso.Img]} alt="Imagen Logo" />
                </Link>
                <div className='curso-etiqueta'>
                    <a href="">PowerBi</a>
                </div>
            </div>
            <div className="curso-descripcion">
                <div className="curso-datos">
                    <div className='curso-datos-inf'>
                        {iconosSvg('user')}
                        <p>{varCurso.Nombre}</p>
                    </div>
                    <div className='curso-datos-inf'>
                        {iconosSvg('date')}
                        <p>{varCurso.Fecha}</p>
                    </div>
                </div>
                <h3>{varCurso.Titulo}</h3>
                <p>{varCurso.Descripcion}</p>
                <a href="">Leer Mas <span>&rarr;</span></a>

            </div>
            
        </div >
    );
  };
  
  export default Curso