import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    desc:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    desc:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    desc:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    desc:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  }];

function ProductCart({product, setCount, count}){
  return (
    <div className="product-card">
        <img src={product.imageSrc} alt={product.desc}/>
        <div className='product-info'>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
        <p>{product.desc}</p>
        <button onClick={() => setCount(count + 1)}>
          add to cart
        </button>
    </div>
  )
}

function App() {

//  const count = 0;
 
 const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>no-brand-shop</h1> 
      <h3 className='cart'> 🛒 cart: {count}</h3>
      <div className='products-list'>
        {products.map((product) => <ProductCart product={product} setCount={setCount} count={count} key={product.id}/> )}


      </div>
    </div>
  )
}

export default App
