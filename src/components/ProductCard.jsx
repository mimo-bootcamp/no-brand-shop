import { Link } from "react-router-dom";

const ProductCard = ({product, setCount, count}) => {
  console.log(product)
    return (
       
      <div className="product-card">
         <Link to={"product/"} >
            <img className="card-img" src={product.imageSrc} alt={product.desc}/>
            <div className='product-info'>
              <h3>{product.name}</h3>
              <h3>{product.price}</h3>
            </div>
            <p>{product.desc}</p>
          </Link>
          <button onClick={() => setCount(count + 1)}>
            add to cart
          </button>
      </div>
     
    )
  }

export default ProductCard;