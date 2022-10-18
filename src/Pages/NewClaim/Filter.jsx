import verified from "../../Assets/img/verified.svg";
import { Link } from "react-router-dom";

const Filter = (props) => {
  const urlFilter = `/institution/${props.category}`;

  return (
    <Link to={urlFilter}>
      <div className="filterContainer">
        <div className="filterItemContainer">
          <img className="filterIconRounded" src={props.src} alt={props.alt} />
          <p className="filterText">{props.text}</p>
          <img className="filterVerified" src={verified} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Filter;
