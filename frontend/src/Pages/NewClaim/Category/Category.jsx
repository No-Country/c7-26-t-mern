import { Link } from "react-router-dom";
import './category.css';

const Category = (props) => {
  return (
    <Link to={props.id} className="categoryBoxContainer">
      <img src={props.img} className="categoryBox"/>
      {props.text}
    </Link>
  )
}

export default Category;