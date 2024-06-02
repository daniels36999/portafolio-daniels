import Iconos from '../recursos/svg'

function Tarjeta4() {

  return (
    <>
    <div className="notificationCard">
        <p className="notificationHeading">Notificación de Envio</p>
        {Iconos('check2')}
        <p className="notificationPara">¡Datos enviados correctamente!. Nos pondremos en contacto contigo pronto.</p>
        <div className="buttonContainer">
            <button className="AllowBtn">Regresar</button>
        </div>
    </div>
    </>
  );
}

export default Tarjeta4