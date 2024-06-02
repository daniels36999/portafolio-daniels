import Iconos from '../recursos/svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Tarjeta4 from './tarjeta4'

const Formulario = () => {

    const [state, handleSubmit] = useForm("xbjnvdye");

    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowImage(true);
            const timer = setTimeout(() => {
                setShowImage(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    if (showImage) {
        return (
            <div className="full-formulario">
                <Tarjeta4/>
            </div>
        );
    }

    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }

    return(
        <form className="formulario1" onSubmit={handleSubmit}>
            <fieldset className='form1-contenido'>  

                <h2>Contactame</h2>
                <div className='form1-input'>
                    {/* <label htmlFor="nombre">Nombre</label> */}
                    {Iconos('user')}
                    <input type="text" className='inputField1' placeholder="Nombre" id="nombre" name='nombre'/>
                    <ValidationError prefix="Nombre" field="nombre" errors={state.errors}/>
                </div>
                <div className='form1-input'>
                    {Iconos('apellido')}
                    <input type="text" className='inputField1' placeholder="Apellido" id="apellido" name='apellido'/>
                    <ValidationError prefix="Apellido" field="apellido" errors={state.errors}/>
                </div>
                <div className='form1-input'>
                     {Iconos('email')}
                    <input type="email" className='inputField1' placeholder="E-mail" id="email" name='email'/>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                </div>
                <div className='form1-input'>
                    {Iconos('telefono')}
                    <input type="tel" className='inputField1' placeholder="Teléfono" id="telefono" name='telefono'/>
                    <ValidationError prefix="Telefono" field="telefono" errors={state.errors}/>
                </div>
                <div className='form1-input'>
                    <textarea id="mensaje" className='inputArea1' placeholder="Escribenos..." name='mensaje'></textarea>
                    <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors}/>
                </div> 

                <button className='boton4' type="submit" disabled={state.submitting}>
                    <Link to="#" >Enviar</Link>
                </button>              
        </fieldset>
        </form>

    );
};

export default Formulario