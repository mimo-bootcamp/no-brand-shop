import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage  = ({imgUrl, name, price, desc}) => {

const {id} = useParams();
console.log(id)

    return (
        <div className="product-page">
            {/* <img className="" src={imgUrl}/>
            <div>
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{desc}</p>
            </div> */}
            <h2>{id}</h2>
        </div>
    )
}

export default ProductPage;