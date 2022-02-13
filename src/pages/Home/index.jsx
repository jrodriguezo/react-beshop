import { useState, useEffect } from 'react'
import ListOfProducts from '../../components/ListOfProducts/index'
import getProducts from '../../services/getProducts'
import './styles.css'

function SearchProducts() {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    /* GET api for all products */
    useEffect(function () {
    getProducts()
        .then(products => {
            setProducts(products)
            setAllProducts(products)
            setIsLoading(false)
        })
    }, [isLoading])

    /* Filter input by brand or model */
    const handleChange = (e) => {
        const keyword = e.target.value

        if(keyword !== ''){
            const results = allProducts.filter((item)=> {
                return item.brand.toUpperCase().includes(keyword.toUpperCase()) || item.model.toUpperCase().includes(keyword.toUpperCase())
            })
            setProducts(results)
        }else {
            setProducts(allProducts)
        }
        setFilter(keyword)
    }

    if(isLoading) return <div>Loading...</div>

    return (
        <div className='home'>
            Filter &nbsp;
            <input id="filter"
                name="filter"
                type="text"
                value={filter}
                placeholder="Search item"
                onChange={handleChange}
            />
            <p>{products.length === 100 ? '' : products.length + ' items found'}</p>
            <div className='container'>
                <ListOfProducts products={products} />
            </div>
        </div>
    )
}

export default SearchProducts;
