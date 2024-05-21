import iconosSvg from './svg'

interface propiedadesProps {
    tipo: string;
    enlace: string;
    svg: string;
    clase:string;
    nombre:string;

  }


const Boton = (propiedades:propiedadesProps) => {
    const clicEnlace = (link:string) => {
        window.open(link, '_blank');
    };

    let boton;

    switch (propiedades.tipo) {
        case 'btn1': //Boton Modelo 1
            boton = (
                <button className="btn" onClick={() => clicEnlace(propiedades.enlace)}>
                    <span className={`btn-Cont ${propiedades.svg}-bd`}>
                        {iconosSvg(propiedades.svg)}
                    </span>
                    <span className={`btn-bg ${propiedades.svg}`}></span>
                </button>
            );
            return boton;

        case 'btn2': //Boton Modelo 2
        boton = (
            <button className={`btn2 ${propiedades.clase}-bg`}>
                {iconosSvg(propiedades.svg)}
                <p className="text">{(propiedades.nombre)}</p>
            </button>
        );
        return boton;

        case 'btn3': //Boton Modelo 3
        boton = (
            <button className="boton3" onClick={() => clicEnlace(propiedades.enlace)}>
                <span className="boton3-icon">{iconosSvg(propiedades.svg)}</span>
                <span className="boton3-text">{propiedades.nombre}</span>
            </button>
        );
        return boton;

        default:
            boton = null;
    }


};

export default Boton;