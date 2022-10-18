import Filter from "./Filter";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import asd from '../../Assets/img/verified.svg'
import { institutionData } from "../../datas/themesData";

const FilterClaim = () => {
  return (
    <div>
      <div className="nuevoReclamoTopNav">
        <Link to={"/home"} className="appNotificationIcon">
          <AiOutlineArrowLeft />
        </Link>
        <h2 className="appNotificationTextMenu">Nuevo Reclamo</h2>
      </div>

      <div className="themesDataContainer">
        {institutionData.map(({ url, category, title }, index) => {
          return (
            <Filter
              category={category}
              key={index}
              src={url}
              alt={title}
              text={title}
              className="filterIconRounded"
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterClaim;
