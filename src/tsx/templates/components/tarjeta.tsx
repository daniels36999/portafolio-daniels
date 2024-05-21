//IMPORTAR
import imagenes from '../../../assets/imagenes';
import Boton from '../recursos/botones';

const Tarjeta = () => {
    return (
        <div className='tarjeta'>
            <div className='tarjeta-img'>
                <img src={imagenes.foto} alt="Imagen Logo"/>
            </div>
            <div className='tarjeta-descripcion'>
                <h3>Daniel Yautibug</h3>
                <p>Ing. Electrónica y Telecomunicaciones</p>
            </div>
            <div className='footer-social-1 tarjeta-btn'>
                <Boton 
                    tipo='btn1'
                    enlace='https://daniels36999.github.io/portafolio-daniels/'
                    svg='web'
                    clase=''
                    nombre=''/>
                 <Boton 
                    tipo='btn1'
                    enlace='https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/'
                    svg='linkedin'
                    clase=''
                    nombre=''/>
                <Boton 
                    tipo='btn1'  
                    enlace='https://grabcad.com/daniel.patricio.yautibug-1'
                    svg='grabcad'
                    clase=''
                    nombre=''/>
                <Boton 
                    tipo='btn1'
                    enlace='https://github.com/daniels36999/'
                    svg='github'
                    clase=''
                    nombre=''/>
            </div>
        </div>
    );
};
export default Tarjeta;