import { Link } from "wouter";
import './styles.css';

function index() {
  return ( 
    <div className="header">
        <Link className="link" to="/">beShop</Link>
    </div>
  )
}

export default index;
