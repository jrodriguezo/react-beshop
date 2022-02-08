import './styles.css'

function index({id, brand, model, price, imgUrl}) {
    return (
        <div className="product">
              <img alt={id} src={imgUrl}/>
        </div>
      )
}

export default index;
