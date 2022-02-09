import { useState, useEffect } from 'react'
import ListOfProducts from '../../components/ListOfProducts/index'
import Product from '../../components/Product'
import getProducts from '../../services/getProducts'
import './styles.css'

function SearchProducts() {
    const [products, setProducts] = useState([])
    const [PRODUCT, setPRODUCT] = useState([])
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(function () {
    getProducts()
        .then(products => {
            setProducts(products)
            setPRODUCT(products)
            setIsLoading(false)
        })
    }, [isLoading])

    if(isLoading) return <div>Loading...</div>

    const handleChange = (e) => {
        const keyword = e.target.value.toUpperCase()

        if(keyword !== ''){
            const results = PRODUCT.filter((item)=> {
                return item.brand.toUpperCase().includes(keyword) || item.model.toUpperCase().includes(keyword)
            })
            setProducts(results)
        }else {
            setProducts(PRODUCT)
        }
        setFilter(keyword)
    }

    return (
        <div className='home'>
            <input id="filter"
                name="filter"
                type="text"
                value={filter}
                onChange={handleChange}
            />
            <div className='container'>
                <ListOfProducts products={products} />
            </div>
        </div>
    )
}

export default SearchProducts;
