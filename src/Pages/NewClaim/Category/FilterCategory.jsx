import { useLocation } from "react-router-dom";

import InstitutionCard from "../InstitutionCard";
import ThemeCard from "../../../Components/ThemeCard/ThemeCard";

import { themesData } from "../../../datas/themesData";

import "./filterCategory.css";

const FilterSingleCategory = () => {
  // const { idInstitucion } = useParams();

  // useEffect(() => {
  //     setItems(institutionData.filter((item) => {
  //         return item.category === idInstitucion
  //     }))
  // }, [idInstitucion])

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
            {themesData.map(({ color, title, id }, idx) => (
              <ThemeCard bg={color} title={title} key={idx} id={id} />
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
