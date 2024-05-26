import Iconos from '../recursos/svg';
import { Link } from 'react-router-dom';

const Formulario = () => {
    return(
        <form className="formulario1">
            <fieldset className='form1-contenido'>  

                <h2>Contactame</h2>
                <div className='form1-input'>
                    {/* <label htmlFor="nombre">Nombre</label> */}
                    {Iconos('user')}
                    <input type="text" className='inputField1' placeholder="Nombre" id="nombre"/>
                </div>
                <div className='form1-input'>
                    {Iconos('apellido')}
                    <input type="text" className='inputField1' placeholder="Apellido" id="apellido"/>
                </div>
                <div className='form1-input'>
                     {Iconos('email')}
                    <input type="email" className='inputField1' placeholder="E-mail" id="email"/>
                </div>
                <div className='form1-input'>
                    {Iconos('telefono')}
                    <input type="tel" className='inputField1' placeholder="Teléfono" id="telefono"/>
                </div>
                <div className='form1-input'>
                    <textarea id="mensaje" className='inputArea1' placeholder="Escribenos..."></textarea>
                </div> 

                <button className='boton4'>
                    <Link to="#" >Enviar</Link>
                </button>              
        </fieldset>
        </form>

    );
};

export default Formulario