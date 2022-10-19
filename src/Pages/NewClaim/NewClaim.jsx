import InputReclamo from "../../Components/InputReclamo/InputReclamo";
import ubication from "../../Assets/img/mapa.svg";
import "./newclaim.css";
// import image from "../../Assets/img/imagenes.svg";
import { useState } from 'react';

export const NewClaim = () => {

    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");
    const [ubicationInput, setUbication] = useState("");

    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleOnChangeTextArea = (e) => {
        setTextArea(e.target.value);
    };

    const handleOnChangeUbication = (e) => {
        setUbication(e.target.value);
    };

    const buttonHandlerColor = title === "" || textArea === "" || ubicationInput === "";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("reclamo creado");
    };

    return (
        <form onSubmit={handleSubmit} className="nuevoReclamoContainer">

            <h2 className='nuevoReclamoTitle'>Adjuntá detalles de tu problema:</h2>
            <div className='nuevoReclamoInputs'>
                <InputReclamo
                    className='inputBoxInput'
                    type={"text"}
                    label={"Titulo"}
                    value={"titulo"}
                    name="titulo"
                    disabled={""}
                    onChange={handleOnChangeTitle}
                />
                <div className='textAreaContainer'>
                    <div>
                        <textarea
                            onChange={handleOnChangeTextArea}
                            className='textAreaReclamo' placeholder='Descripción del problema...'></textarea>
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
                        name="ubicacion"
                        disabled={""}
                        onChange={handleOnChangeUbication}
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
                <input
                    type='submit' value='PUBLICAR' className='nuevoReclamoSubmit'
                    style={{ backgroundColor: buttonHandlerColor ? "#8E938D" : "#8f0000" }} />
            </div>
        </form>
    )
}
