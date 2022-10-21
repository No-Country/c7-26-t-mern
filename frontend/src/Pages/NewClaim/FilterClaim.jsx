import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { Link, Outlet } from "react-router-dom";
// import asd from '../../Assets/img/verified.svg'
import { institutionData } from "../../datas/themesData";
import axios from "axios";

const URL = "http://localhost:4000/api/v1";

const FilterClaim = () => {
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
        {institutions.map(
          ({ id, name, email, RUT, address, cityId }, index) => {
            return (
              <Filter
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

      <Outlet></Outlet>
    </div>
  );
};

export default FilterClaim;
