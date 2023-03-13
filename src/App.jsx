import { useState } from 'react'

import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import ProductPage from './pages/ProductPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useParams,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";
import About from './pages/About';
import ProductList from './components/ProductList';
import RootLayout from '.layouts/RootLayout'

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      desc:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
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
   ])

  const [count, setCount] = useState(5);

  const { id } = useParams()

  console.log(id)

 
 

//   const router = createBrowserRouter([
//     {
//     path:'/',
//     element: (<RootLayout />),
//     },
//     {
//       path: 'about',
//       element: ( <div>
//          <h1>about page </h1>
//       </div> )
//     },
//     {
//       path: "product/:id",
//       element:  <div> <ProductPage/></div>,
//     },
//     {
//       path: 'product/:id',
//       // element: (   <ProductPage imgUrl={products[0].imageSrc} name={products[0].name} price={products[0].price} desc={products[0].desc} />)
//       element: ( <div> product id : {id}</div> )
//     }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout count={count}/>} >
        <Route index element={<ProductList products={products} count={count} setCount={setCount} />} />
        <Route path='about' element={<About/>}/>
        {/* <Route path='product:id' element={<div>product id : {id}</div>}/> */}
        <Route path='product/:id' element={<ProductPage/>}/>
    </Route>
  )
)

  return (
  <RouterProvider router={router}/>
  )
}

export default App
