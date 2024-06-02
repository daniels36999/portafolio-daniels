import Iconos from '../recursos/svg'
interface Tarjeta3Props {
    T3_Icon: string;
    T3_Titulo: string;
    T3_Parrafo:string;
    T3_Url:string;
  }

function Tarjeta3(varTarjeta3: Tarjeta3Props) {

  const scrollToSection = () => {
    const section = document.getElementById("certificados");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
  return (
    <>
    <div className='tarjeta3'>
        <h3>{varTarjeta3.T3_Titulo}</h3>
        <div className='tarjeta3-contenido'>
            {Iconos(varTarjeta3.T3_Icon)}
            <p>{varTarjeta3.T3_Parrafo}</p>          
        </div>
        <div className='tarjeta3-btn'>
            <button className='boton4' onClick={scrollToSection} >
                Certificados
            </button>   
        </div>
    

    </div>
    </>
  );
}

export default Tarjeta3