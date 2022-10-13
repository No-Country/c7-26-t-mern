import React from 'react';
import './nuevoreclamo.css';
import { AiOutlineArrowLeft, AiFillFileAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import InputReclamo from '../../Components/InputReclamo/InputReclamo';
import ubication from '../../Assets/img/mapa.svg';
import image from '../../Assets/img/imagenes.svg';

export const NuevoReclamo = () => {
    return (
        <div className="nuevoReclamoContainer">
            <div className="nuevoReclamoTopNav">
                <Link to={"/home"} className="appNotificationIcon"><AiOutlineArrowLeft /></Link>
                <span className="appNotificationTextMenu">Nuevo Reclamo</span>
            </div>

            <h2 className='nuevoReclamoTitle'>Adjuntá detalles de tu problema:</h2>
            <div className='nuevoReclamoInputs'>
            <InputReclamo
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
                    {/* <img className='iconInput' src={ubication} alt="" /> */}
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
                    <img  className='iconInput' src={image} alt="" />
                <div className='inputFileContainer'>
                    <input type="file" id='file' accept='image/*' />
                    <label className='labelFile' htmlFor="file">
                        Adjuntá fotos/videos &nbsp;
                        <AiFillFileAdd className='labelIcon' />
                    </label>
                    <h3>*Opcional (hasta 4 archivos)</h3>
                </div>
                </div>
                <button className='nuevoReclamoSubmit'>SIGUIENTE</button>
            </div>
        </div>
    )
}
