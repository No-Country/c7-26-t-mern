import { Outlet } from "react-router-dom";

import SearchBar from "../../../Components/SearchBar/SearchBar";
import { institutionData } from "../../../datas/themesData";
import Filter from "../Filter";

import "./filterInstitution.css";

const FilterInstitution = () => {
  return (
    <div>
      <div className="themesDataContainer">
        <SearchBar placeholder="Busca un reclamo" />
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

export default FilterInstitution;
