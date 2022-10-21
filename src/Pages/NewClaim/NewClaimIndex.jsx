import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import TopNav from "../../Components/Nav/TopNav/TopNav";
import "./NewClaim/newclaim.css";


// import asd from '../../Assets/img/verified.svg'

const NewClaimIndex = () => {
  const history = useNavigate();

  function Profile() {
    const location = useLocation();
    try {
      const { Title } = location.state;
      return Title;
    } catch (err) {
      return "Default";
    }
  }

  return (
    <div>
       {/* <div className="topNavDinamicContainer">
                <TopNav
                    className="topNav" />
            </div> */}
      <div className="nuevoReclamoTopNav">
        <span
          onClick={() => {
            history(-1);
          }}
          className="appNotificationIcon"
        >
          <AiOutlineArrowLeft />
        </span>
        <h2 className="appNotificationTextMenu">{Profile()}</h2>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default NewClaimIndex;
