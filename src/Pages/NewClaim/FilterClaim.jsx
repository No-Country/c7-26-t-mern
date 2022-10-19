import Filter from "./Filter";
import { Link, Outlet } from "react-router-dom";
// import asd from '../../Assets/img/verified.svg'
import { institutionData } from "../../datas/themesData";

const FilterClaim = () => {

  return (
    <div>
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

      <Outlet></Outlet>
    </div>
  );
};

export default FilterClaim;
