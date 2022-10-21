import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import InstitutionCard from "../InstitutionCard";
import ThemeCard from "../../../Components/ThemeCard/ThemeCard";

import { themesData } from "../../../datas/themesData";

import "./filterCategory.css";
import axios from "axios";

const URL = "http://localhost:4000/api/v1";

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
            {categories.map(({ name, id }, idx) => (
              <ThemeCard name={name} key={idx} id={id} />
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
