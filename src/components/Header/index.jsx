import { useContext } from "react";
import { UserContext } from "../../context/UserContext"
import { Link } from "wouter";
import { FaShoppingCart } from "react-icons/fa";

import './styles.css';

function Header() {
  const {counter} = useContext(UserContext)

  return ( 
    <div className="header">
        <Link className="link" to="/">beShop</Link>
        <div className="shopping">
            <FaShoppingCart size={50} />
            <span>{counter}</span>
        </div>
    </div>
  )
}

export default Header;
