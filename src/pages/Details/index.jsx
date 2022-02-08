import { useState, useEffect } from "react"
import getProductById from "../../services/getProductById"
import Selector from "../../components/Selector/index"
import userContext from "../../hooks/userContext"
import './styles.css'
import postCart from "../../services/postCart"

function Details({params}) {
    const { id } = params
    const user = userContext()
    const [product, setproduct] = useState([])

    useEffect(function () {
    getProductById({id})
        .then(productSelected => {
            setproduct(productSelected)
        })
    }, [id])

    const handleChange = (e) => {
        e.preventDefault();
        postCart()
            .then((newCount) => {
                console.log(user.count)
                user.count += newCount
            })
    }
    
    return (
        <div className="detail">
            <img src={product.imgUrl} alt={id} />
            <div className="column-right">
                <ul style={{textAlign: "left"}}>
                    <li>{product.brand}</li>
                    <li>{product.model}</li>
                    <li>{product.price}</li>
                    <li>{product.cpu}</li>
                    <li>{product.ram}</li>
                    <li>{product.os}</li>
                    <li>{product.displayResolution}</li>
                    <li>{product.battery}</li>
                    <li>{product.dimentions}</li>
                    <li>{product.weight}</li>
                </ul>
                <form>
                    {/* 
                        <div>
                            <Selector selectorName={"Almacenamiento"} values={product.internalMemory} />
                            <Selector selectorName={"Colores"} values={product.colors} />
                        </div>
                        */}
                    <button onClick={handleChange}>Buy</button>
                </form>
            </div>

        </div>
        )
}

export default Details;
