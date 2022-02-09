import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../context/UserContext"
import getProductById from "../../services/getProductById"
import Selector from "../../components/Selector/index"
import './styles.css'
import postCart from "../../services/postCart"

function Details({params}) {
    const { id } = params
    const {storageValue, colorValue, counter, setCounter} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [product, setproduct] = useState([])

    useEffect(function () {
    getProductById({id})
        .then(productSelected => {
            setproduct(productSelected)
            setIsLoading(false)
        })
    }, [id])

    if(isLoading) return <div>Cargando...</div>

 

    const handleChange = (e) => {
        e.preventDefault();
        postCart(id, colorValue, storageValue)
            .then((newCount) => {
                setCounter(counter + newCount)
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
                <form onSubmit={handleChange}>
                        <div>
                            <Selector selectorName={'Storage'} values={product.internalMemory} type={'storage'} />
                            <Selector selectorName={'Colors'} values={product.colors}  type={'color'}/>
                        </div>  
                    <button>Buy</button>
                </form>
            </div>

        </div>
        )
}

export default Details;
