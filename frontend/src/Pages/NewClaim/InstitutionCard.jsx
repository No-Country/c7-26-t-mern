import verified from "../../Assets/img/verified.svg";
import { Link } from "react-router-dom";

const InstitutionCard = (props) => {

  return (
    <div>
    <Link to="/newClaim/category" state={{ Title: "Categoria", Institution: props}} style={{pointerEvents: props.link === true ? '' : 'none'}}>
      <div className="filterContainer">
        <div className="filterItemContainer">
          <img className="filterIconRounded" src={props.src} alt={props.alt} />
          <p className="filterText">{props.text}</p>
          <img className="filterVerified" src={verified} alt="" />
        </div>
      </div>
    </Link>
    </div>
  );
};

export default InstitutionCard;
