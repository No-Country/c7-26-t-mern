import { AiOutlineArrowLeft, AiFillFileAdd } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import InputReclamo from "../../Components/InputReclamo/InputReclamo";
import ubication from "../../Assets/img/mapa.svg";
import "./newclaim.css";
import image from "../../Assets/img/imagenes.svg";

export const NewClaim = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reclamo creado");
  };

  return (
    <form onSubmit={handleSubmit} className="nuevoReclamoContainer">
      <div className="nuevoReclamoTopNav">
        <Link to={"/home"} className="appNotificationIcon">
          <AiOutlineArrowLeft />
        </Link>
        <h2 className="appNotificationTextMenu">Nuevo Reclamo</h2>
      </div>

            <h2 className='nuevoReclamoTitle'>Adjuntá detalles de tu problema:</h2>
            <div className='nuevoReclamoInputs'>
                <InputReclamo
                    className='inputBoxInput'
                    type={"text"}
                    label={"Titulo"}
                    value={"titulo"}
                    //   onChange={handleChange}
                    name="titulo"
                    disabled={""}
                />
                <div className='textAreaContainer'>
                    <div>
                        <textarea className='textAreaReclamo' placeholder='Descripción del problema...'></textarea>
                        <label>Descripción del problema...</label>
                    </div>
                    <h3 className='textAreaSubtitle'>Hacelo de la forma más detallada posible.</h3>
                </div>

                <div className='ubicacionContainer'>
                    <img className='iconInput' src={ubication} alt="" />
                    <InputReclamo
                        className='inputUbicacion'
                        type={"text"}
                        label={"Ubicación"}
                        value={"ubicacion"}
                        //   onChange={handleChange}
                        name="ubicacion"
                        disabled={""}
                    />
                </div>
                <div className='fileContainer'>
                    {/* <img className='iconInput' src={image} alt="" /> */}
                    <div className='inputFileContainer'>
                        <input 
                        className="inputFile" 
                        type="file" 
                        id='file' 
                        accept='image/*, video/*' 
                        multiple
                        capture="environment, user" />
                        <h3>*Opcional (hasta 4 archivos)</h3>
                    </div>
                </div>
                <input type='submit' value='CREAR RECLAMO' className='nuevoReclamoSubmit' />
            </div>
        </form>
    )
}
