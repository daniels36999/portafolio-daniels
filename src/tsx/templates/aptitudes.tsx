import Iconos from '../templates/recursos/svg';


function Aptitudes() {


  return (
        <div className='aptitudes'>
            <div className='aptitudes-opciones'>
                <div className='titulos'>
                    <h3>Competencias</h3>
                    <h1>Aptitudes</h1>
                    <div className="linea-efecto"></div>
                </div>
                <div className='certificado-aptitudes'>
                    <div className='aptitud'>{Iconos('suma')}<p>Ing. Electrónica</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Ing. Telecomunicaciones</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Instalaciones Eléctricas</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Base de Datos</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>ISO27001</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Desarrollo Web</p></div>
                </div>
            </div>
            <div className='aptitudes-opciones'>
                <div className='titulos'>
                    <h3>Habilidades</h3>
                    <h1>Ofimáticas</h1>
                    <div className="linea-efecto"></div>
                </div>
                <div className='certificado-aptitudes'>
                    <div className='aptitud'>{Iconos('suma')}<p>MS. Word</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>MS. Excel</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>MS. PowerPoint</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>MS. Visio</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Overleaf Latex</p></div>
                </div>
            </div>
            <div className='aptitudes-opciones'>
                <div className='titulos'>
                    <h3>Habilidades</h3>
                    <h1>Informáticas</h1>
                    <div className="linea-efecto"></div>
                </div>
                <div className='certificado-aptitudes'>
                    <div className='aptitud'>{Iconos('suma')}<p>Autodesk Inventor</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>AutoCad</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Power BI</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>SQL Server</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Table Plus</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Arduino IDE</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>IBM SPSS</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Matlab</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>CST Studio</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Proteus Desing</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Fritzing</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Visual Studio Code</p></div>
                    <div className='aptitud'>{Iconos('suma')}<p>Unity 3D</p></div>
                </div>
            </div>
        </div>

  );
};

export default Aptitudes