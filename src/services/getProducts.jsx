const PATH_GET_PRODUCT = '/api/product'

function getProducts() {
    const API_URL = `https://front-test-api.herokuapp.com${PATH_GET_PRODUCT}`

    return (
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
                const products = data.map(product => {
                    const {id, brand, model, price, imgUrl} = product
                    return {id, brand, model, price, imgUrl}
                })
                return products
        })
    )
}

export default getProducts;
