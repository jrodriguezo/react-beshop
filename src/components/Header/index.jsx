import { Link } from "wouter";
import { FaShoppingCart } from "react-icons/fa";

import './styles.css';

function index() {
  return ( 
    <div className="header">
        <Link className="link" to="/">beShop</Link>
        <div className="shopping">
            <FaShoppingCart size={50} />
            <span>{0}</span>
        </div>
    </div>
  )
}

export default index;
