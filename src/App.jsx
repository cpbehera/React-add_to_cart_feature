import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './ProductListing.jsx';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    getProducts();
  }, []);

  function getProducts(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
      setProducts(json);
    })
  }

  return (
    <>
    <div className='container'>
      <div className='row'>
        {products.map((product) => (
          <div className='col-md-3' key={product.id}>
            <CardItem className="h-100" product={product} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
