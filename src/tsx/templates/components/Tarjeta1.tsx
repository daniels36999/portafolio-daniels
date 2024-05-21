import imagenes from '../../../assets/imagenes';

interface Tarjeta1Props {
    T1_Img: string;
    T1_Titulo: string;
    T1_Parrafo:string;
    T1_Boton:string;
    T1_Url:string;
  }

const Tarjeta1 = (varTarjeta1: Tarjeta1Props) => {
    return (
        <div className="card">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="card-contenido">
                <h1>{varTarjeta1.T1_Titulo}</h1>
                <img src={imagenes[varTarjeta1.T1_Img]} alt="Imagen Seccion" />
                <p>{varTarjeta1.T1_Parrafo}</p>
                
                <hr></hr>
                <a href={varTarjeta1.T1_Url}>
                    <button >
                        {varTarjeta1.T1_Boton}
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Tarjeta1