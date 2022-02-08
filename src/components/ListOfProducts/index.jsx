import Product from '../Product/index';

function index({products}) {
    return products.map(({id, brand, model, price, imgUrl}) =>
        <Product 
            key={id}
            brand={brand}
            model={model}
            price={price}
            imgUrl={imgUrl}
            id={id}
        />
  )
}

export default index;
