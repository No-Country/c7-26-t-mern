import { useEffect, useState } from 'react';
import Filter from "./Filter";
import { useParams } from 'react-router-dom';
import { themesData, institutionData } from '../../datas/themesData';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Category from "./Category/Category";
import ThemeCard from "../../Components/ThemeCard/ThemeCard";


const FilterSingleCategory = () => {

    const [item, setItems] = useState(null)
    const { idInstitucion } = useParams();


    useEffect(() => {
        setItems(institutionData.filter((item) => {
            return item.category === idInstitucion
        }))
    }, [idInstitucion])


    return (
        <div>
            <div className="nuevoReclamoTopNav">
                <Link to={"/home"} className="appNotificationIcon"><AiOutlineArrowLeft /></Link>
                <h2 className="appNotificationTextMenu">Nuevo Reclamo</h2>
            </div>
            {item
                ?
                <div>
                    <Filter
                        category={item[0].category}
                        src={item[0].url}
                        alt={item[0].title}
                        text={item[0].title}
                        className='filterIconRounded' />

                    <p>Categorías asociadas</p>

                    <div className="themeCardContent">
                        {themesData.map(({url, title, id}, idx) => (
                            <ThemeCard url={url} title={title} key={idx} id={id} />
                        ))}
                    </div>
                </div>
                : <p>Cargando...</p>
            }
        </div>

    )
}

export default FilterSingleCategory;