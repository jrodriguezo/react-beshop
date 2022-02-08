const PATH_GET_CART = '/api/cart'

function postCart() {
    const API_URL = `https://front-test-api.herokuapp.com${PATH_GET_CART}`
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            { 
                id: '0001',
                colorCode: 2,
                storageCode: 2
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
