import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import { institutionData } from "../../../datas/themesData";
import InstitutionCard from "../InstitutionCard";

import "./filterInstitution.css";
import axios from "axios";

const URL = "http://localhost:4000/api/v1";

const FilterInstitution = () => {
  const [institutions, setInstitutions] = useState([]);
  const [token, setToken] = window.localStorage.getItem("token");

  useEffect(() => {
    const getInstitutions = async () => {
      let response;
      if (token.length > 0) {
        const { data: array } = await axios.get(`${URL}/institutions`);
        response = array;
        setInstitutions(response.data);
      } else {
        function error(params) {
          console.error("No se han encontrado instituciones");
          console.log(params);
        }
      }
      console.log(response);
    };
    getInstitutions();
  }, [token]);

  return (
    <div>
      <div className="themesDataContainer">
        <SearchBar placeholder="Busca un reclamo" />
        {institutions.map(
          ({ id, name, email, RUT, address, cityId }, index) => {
            return (
              <InstitutionCard
                link={true}
                institutionId={id}
                address={address}
                RUT={RUT}
                text={name}
                className="filterIconRounded"
                key={index}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default FilterInstitution;
