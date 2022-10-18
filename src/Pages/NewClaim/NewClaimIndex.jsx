import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
// import asd from '../../Assets/img/verified.svg'


const NewClaimIndex = () => {
  function Profile() {
    const location = useLocation();
    try {
      const { Title } = location.state;
      return Title;
    } catch(err) {
      return "Default"
    }
  }

  return (
    <div>
      <div className="nuevoReclamoTopNav">
        <Link to={"/home"} className="appNotificationIcon">
          <AiOutlineArrowLeft />
        </Link>
        <h2 className="appNotificationTextMenu">{Profile()}</h2>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default NewClaimIndex;
