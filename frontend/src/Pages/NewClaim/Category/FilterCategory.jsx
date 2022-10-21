<<<<<<<< HEAD:frontend/src/Pages/NewClaim/FilterSingleCategory.jsx
import { useEffect, useState } from "react";
import Filter from "./Filter";
import { useParams, useLocation } from "react-router-dom";
import { themesData, institutionData } from "../../datas/themesData";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Category from "./Category/Category";
import ThemeCard from "../../Components/ThemeCard/ThemeCard";
import axios from "axios";

const URL = "http://localhost:4000/api/v1";
========
import { useLocation } from "react-router-dom";

import InstitutionCard from "../InstitutionCard";
import ThemeCard from "../../../Components/ThemeCard/ThemeCard";

import { themesData } from "../../../datas/themesData";

import "./filterCategory.css";
>>>>>>>> bc6de52abe893d0c1b0b479bc05dc68f1580f556:frontend/src/Pages/NewClaim/Category/FilterCategory.jsx

const FilterSingleCategory = () => {
  const [categories, setCategories] = useState([]);
  const [token, setToken] = window.localStorage.getItem("token");

  useEffect(() => {
    const getCategories = async () => {
      let response;
      if (token.length > 0) {
        const { data: array } = await axios.get(`${URL}/categories`);
        response = array;
        setCategories(response.data);
      } else {
        function error(params) {
          console.error("No se han encontrado categories");
          console.log(params);
        }
      }
      console.log(response);
    };
    getCategories();
  }, [token]);

  function InstitutionGetter() {
    const location = useLocation();
    try {
      const { Institution } = location.state;
      return Institution;
    } catch (err) {
      return "Default";
    }
  }

  let item = InstitutionGetter();
  console.log(item);

  return (
    <div className="categoryClaimSection">
      {item ? (
        <div>
          <InstitutionCard
            category={item.category}
            src={item.src}
            alt={item.text}
            text={item.text}
            className="filterIconRounded"
          />

          <h2 className="categoryClaimSectionTitle">Categorias Asociadas</h2>

          <div className="themeCardContent">
<<<<<<<< HEAD:frontend/src/Pages/NewClaim/FilterSingleCategory.jsx
            {categories.map(({ name, id }, idx) => (
              <ThemeCard name={name} key={idx} id={id} />
========
            {themesData.map(({ color, title, id }, idx) => (
              <ThemeCard bg={color} title={title} key={idx} id={id} link={true}/>
>>>>>>>> bc6de52abe893d0c1b0b479bc05dc68f1580f556:frontend/src/Pages/NewClaim/Category/FilterCategory.jsx
            ))}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default FilterSingleCategory;
