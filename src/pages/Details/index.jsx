import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Selector from "../../components/Selector/index"
import Description from "../../components/Description/index"
import getProductById from "../../services/getProductById"
import lscache from "lscache"
import postCart from "../../services/postCart"
import './styles.css'

function Details({params}) {
    const { id } = params
    const {storageValue, colorValue, counter, setCounter} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState([])

    useEffect(function () {
    getProductById({id})
        .then(productSelected => {
            setProduct(productSelected)
            setIsLoading(false)
        })
    }, [id])

    if(isLoading) return <div>Loading...</div>

    const handleChange = (e) => {
        e.preventDefault();
        postCart(id, colorValue, storageValue)
            .then((newCount) => {
                setCounter(counter + newCount)
                lscache.set('lastCounter', counter, 60) // Storing data in client during 60 mins
            })
        }

    return (
        <div className="detail">
            <img src={product.imgUrl} alt={id} />
            <div className="column-right">
                <Description product={product} />
                <form>
                    <Selector selectorName={'Storage'} values={product.internalMemory} />
                    <Selector selectorName={'Colors'} values={product.colors} /> 
                    <button onClick={handleChange}>Buy</button>
                </form>
            </div>

        </div>
        )
}

export default Details;
