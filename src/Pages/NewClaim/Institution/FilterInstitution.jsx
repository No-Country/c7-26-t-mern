import { Outlet } from "react-router-dom";

import SearchBar from "../../../Components/SearchBar/SearchBar";
import { institutionData } from "../../../datas/themesData";
import InstitutionCard from "../InstitutionCard";

import "./filterInstitution.css";

const FilterInstitution = () => {
  return (
    <div>
      <div className="themesDataContainer">
        <SearchBar placeholder="Busca un reclamo" />
        {institutionData.map(({ url, category, title }, index) => {
          return (
            <InstitutionCard
              link={true}
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
