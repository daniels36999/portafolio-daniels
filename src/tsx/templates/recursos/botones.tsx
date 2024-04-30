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

        default:
            boton = null;
    }


};

export default Boton;