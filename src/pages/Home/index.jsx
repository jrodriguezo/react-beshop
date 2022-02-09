import { useState, useEffect } from 'react'
import ListOfProducts from '../../components/ListOfProducts/index'
import getProducts from '../../services/getProducts'
import './styles.css'

function SearchProducts() {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(function () {
    getProducts()
        .then(products => {
            setProducts(products)
            setAllProducts(products)
            setIsLoading(false)
        })
    }, [isLoading])

    if(isLoading) return <div>Loading...</div>

    const handleChange = (e) => {
        const keyword = e.target.value.toUpperCase()

        if(keyword !== ''){
            const results = allProducts.filter((item)=> {
                return item.brand.toUpperCase().includes(keyword) || item.model.toUpperCase().includes(keyword)
            })
            setProducts(results)
        }else {
            setProducts(allProducts)
        }
        setFilter(keyword)
    }

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
            <div className='container'>
                <ListOfProducts products={products} />
            </div>
        </div>
    )
}

export default SearchProducts;
