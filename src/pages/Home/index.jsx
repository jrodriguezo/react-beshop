import { useState, useEffect } from 'react'
import ListOfProducts from '../../components/ListOfProducts/index'
import getProducts from '../../services/getProducts'
import './styles.css'

function SearchProducts() {
    const [products, setproducts] = useState([])

    useEffect(function () {
    getProducts()
        .then(products => {
            setproducts(products)
        })
    }, [])

    return (
    <div className='container'>
        <ListOfProducts products={products} />
    </div>
    )
}

export default SearchProducts;
