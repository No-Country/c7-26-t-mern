import InputReclamo from "../../../Components/InputReclamo/InputReclamo";
import ubication from "../../../Assets/img/mapa.svg";
import "./newclaim.css";
import image from "../../../Assets/img/imagenes.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeCard from "../../../Components/ThemeCard/ThemeCard";
import InstitutionCard from "../InstitutionCard";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import { AiFillFileAdd } from "react-icons/ai";

const NewClaim = () => {
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

  const buttonHandlerColor =
    title === "" || textArea === "" || ubicationInput === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reclamo creado");
  };

  function ThemeGetter() {
    const location = useLocation();
    try {
      const { Theme, Institution } = location.state;
      console.log(location.state);
      return { Theme, Institution };
    } catch (err) {
      return "Default";
    }
  }

  let { Theme, Institution } = ThemeGetter();
  console.log(Institution);

  return (
    <div>
      <div className="nuevoReclamoSectionSelectionTop">
        <InstitutionCard
          category={Institution.category}
          src={Institution.src}
          alt={Institution.text}
          text={Institution.text}
          className="filterIconRounded"
        />
        <ThemeCard bg={Theme.bg} title={Theme.title} id={Theme.id} />
      </div>

      <div className="nuevoReclamoContainer">
        <form onSubmit={handleSubmit} className="nuevoReclamoContainerForm">
          <h2 className="reclamosAsociadosSectionSelectionClaimsTitle">
            Adjuntá detalles de tu problema:
          </h2>
          <div className="nuevoReclamoInputs">
            <InputReclamo
              className="inputBoxInput"
              type={"text"}
              label={"Titulo"}
              value={"titulo"}
              //   onChange={handleChange}
              name="titulo"
              disabled={""}
            />
            <div className="textAreaContainer">
              <textarea
                className="textAreaReclamo"
                placeholder="Descripción del problema..."
              ></textarea>
              <label>Descripción del problema...</label>

              <h3 className="textAreaSubtitle">
                Hacelo de la forma más detallada posible.
              </h3>
            </div>

            <div className="ubicacionContainer">
              <img className="iconInput" src={ubication} alt="" />
              <InputReclamo
                className="inputUbicacion"
                type={"text"}
                label={"Ubicación"}
                value={"ubicacion"}
                //   onChange={handleChange}
                name="ubicacion"
                disabled={""}
              />
            </div>
            <div className="fileContainer">
              <img className="iconInput" src={image} alt="" />
              <div className="inputFileContainer">
                <input type="file" id="file" accept="image/*" />
                <label className="labelFile" htmlFor="file">
                  Adjuntá fotos/videos &nbsp;
                  <AiFillFileAdd className="labelIcon" />
                </label>
                <h3>*Opcional (hasta 4 archivos)</h3>
              </div>
            </div>
            <PrimaryButton
              text="CREAR NUEVO"
              bg="var(--color-bg-primary)"
              color="var(--color-primary)"
              to="/claimStatus"
              state={{
                Title: "Nuevo Reclamo",
                Theme: Theme,
                Institution: Institution,
              }}
            ></PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewClaim;
