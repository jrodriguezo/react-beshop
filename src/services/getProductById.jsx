const PATH_GET_PRODUCT_BY_ID = '/api/product'

function getProductsById({id}) {
    const API_URL = `https://front-test-api.herokuapp.com${PATH_GET_PRODUCT_BY_ID}/${id}`

    return (
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
                const product = data
                return product
        })
    )
}

export default getProductsById;
