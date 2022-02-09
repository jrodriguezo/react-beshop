const PATH_GET_CART = '/api/cart'

function postCart(id, colorCode, storageCode) {
    const API_URL = `https://front-test-api.herokuapp.com${PATH_GET_CART}`

    console.log(id, colorCode, storageCode)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            { 
                id: id,
                colorCode: colorCode,
                storageCode: storageCode
            })
    }
   
  return ( fetch(API_URL, requestOptions)
            .then(response => response.json())
            .then(({count}) =>{
                return count
            })
        )
}

export default postCart;
