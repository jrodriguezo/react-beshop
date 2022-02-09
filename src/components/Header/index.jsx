import { useContext } from "react";
import { UserContext } from "../../context/UserContext"
import { Link } from "wouter";
import lscache from "lscache";
import { FaShoppingCart } from "react-icons/fa";

import './styles.css';

function Header() {
  const {counter} = useContext(UserContext)

  const counterToUse = counter || lscache.get('lastCounter')

  return ( 
    <div className="header">
        <Link className="link" to="/">beShop</Link>
        <div className="shopping">
            <FaShoppingCart size={30} />
            <span>{counterToUse}</span>
        </div>
    </div>
  )
}

export default Header;
