
import { Link } from 'wouter';
import './styles.css'

function Product({id, brand, model, price, imgUrl}) {
    
    return (
        <Link className="product" to={`/product/${id}`} >
            <img alt={id} src={imgUrl} />
            <div className="text-block">
                Brand: {brand} <br />
                Model: {model} <br />
                Price: {price} <br />
            </div>
        </Link>
      )
}

export default Product;
