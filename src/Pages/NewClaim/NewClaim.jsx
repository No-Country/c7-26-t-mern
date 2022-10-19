import { AiFillFileAdd } from "react-icons/ai";
import InputReclamo from "../../Components/InputReclamo/InputReclamo";
import ubication from "../../Assets/img/mapa.svg";
import "./newclaim.css";
import image from "../../Assets/img/imagenes.svg";
import { useLocation } from "react-router-dom";
import ThemeCard from "../../Components/ThemeCard/ThemeCard";
import Filter from "./Filter";

const NewClaim = () => {
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
      <div className="newClaimContainer">
        <ThemeCard url={Theme.url} title={Theme.title} id={Theme.id} />
        <Filter
          category={Institution.category}
          src={Institution.src}
          alt={Institution.text}
          text={Institution.text}
          className="filterIconRounded"
        />
      </div>

      <form onSubmit={handleSubmit} className="nuevoReclamoContainer">
        <h2 className="nuevoReclamoTitle">Adjuntá detalles de tu problema:</h2>
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
            <div>
              <textarea
                className="textAreaReclamo"
                placeholder="Descripción del problema..."
              ></textarea>
              <label>Descripción del problema...</label>
            </div>
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
          <input
            type="submit"
            value="CREAR RECLAMO"
            className="nuevoReclamoSubmit"
          />
        </div>
      </form>
    </div>
  );
};
export default NewClaim;
