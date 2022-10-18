import Filter from "./Filter";
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
// import asd from '../../Assets/img/verified.svg'
import { institutionData } from "../../datas/themesData";


const FilterClaim = () => {
    return (
        <div>
            <div className="nuevoReclamoTopNav">
                <Link to={"/home"} className="appNotificationIcon"><AiOutlineArrowLeft /></Link>
                <span className="appNotificationTextMenu">Nuevo Reclamo</span>
            </div>

            <div className="themesDataContainer">
                {institutionData.map((item, index) => {
                    return (
                        <Filter
                            category={item.category}
                            key={index}
                            src={item.url}
                            alt={item.title}
                            text={item.title}
                            className='filterIconRounded'
                            
                        />
                    )
                })
                }
            </div>

        </div>
    )
}

export default FilterClaim