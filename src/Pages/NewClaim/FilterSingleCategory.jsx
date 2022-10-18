import { useEffect, useState } from "react";
import Filter from "./Filter";
import { useParams, useLocation } from "react-router-dom";
import { themesData, institutionData } from "../../datas/themesData";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Category from "./Category/Category";
import ThemeCard from "../../Components/ThemeCard/ThemeCard";

const FilterSingleCategory = () => {
  // const { idInstitucion } = useParams();

  // useEffect(() => {
  //     setItems(institutionData.filter((item) => {
  //         return item.category === idInstitucion
  //     }))
  // }, [idInstitucion])

  function Profile() {
    const location = useLocation();
    try {
      const { Institution } = location.state;
      return Institution;
    } catch (err) {
      return "Default";
    }
  }

  let item = Profile();
  console.log(item);

  return (
    <div>
      {item ? (
        <div>
          <Filter
            category={item.category}
            src={item.src}
            alt={item.text}
            text={item.text}
            className="filterIconRounded"
          />

          <div className="themeCardContent">
            {themesData.map(({ url, title, id }, idx) => (
              <ThemeCard url={url} title={title} key={idx} id={id} />
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
