import './styles.css'

function index({id, brand, model, price, imgUrl}) {
    return (
        <div className="product">
            <img className="huerotate" alt={id} src={imgUrl}/>
            <div className="text-block">
                Brand: {brand} <br />
                Model: {model} <br />
                Price: {price} <br />
            </div>
        </div>
      )
}

export default index;
