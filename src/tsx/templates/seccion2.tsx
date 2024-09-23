import Iconos from './recursos/svg';
import Formulario from '../templates/components/formulario';
const Seccion2 = () => {
    return(
        <div className='cont contenedor'>
            <div className='cont-descripcion'>
                <div className='titulos'>
                    <h1>¡Contáctame para oportunidades laborales!</h1>
                    <div className="linea-efecto"></div>
                </div>
                <div className='mi-datos'>
                    <div className='mi-datos1'>
                        <div className='curso-cert-cont'>
                            <div className='curso-skill-icono'>
                                {Iconos('electronica')}
                            </div>
                            <h4>Electrónica</h4>
                        </div>
                    </div>
                    <div className='mi-datos1'>
                        <div className='curso-cert-cont'>
                            <div className='curso-skill-icono'>
                                {Iconos('telecomunicaciones')}
                            </div>
                            <h4>Telecomunicaciones</h4>
                        </div>             
                    </div>
                    <div className='mi-datos1'>
                        <div className='curso-cert-cont'>
                            <div className='curso-skill-icono'>
                                {Iconos('pc')}
                            </div>
                            <h4>Desarrollo Web</h4>
                        </div>             
                    </div>
                </div>
                <p>Soy ingeniero en Electrónica y Telecomunicaciones con experiencia en Desarrollo Web, Electrónica y Telecomunicaciones. Busco nuevas oportunidades donde pueda aplicar mis habilidades. Si tienes un proyecto o vacante acorde a mi perfil, contáctame. ¡Espero saber de ti!</p>
                <div className='about-contacto'>
                    <div className='ab-contacto-img'>
                        {Iconos('email2')}
                    </div>
                    <div className='ab-contacto-desc'>
                        <span>Contáctame...</span>   
                        <h3>dx.daniels14@gmail.com</h3>   
                    </div>
                </div>
            </div>
            <div className='cont-formulario'>
                <Formulario/>
            </div>

        </div>
    );
};

export default Seccion2