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
    <main className='store-page'>
      <div className='container'>
        <div className='row g-4'>
          {products.map((product) => (
            <div className='col-12 col-sm-6 col-lg-4 col-xl-3' key={product.id}>
              <div className='store-item'>
                <CardItem className="h-100" product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  )
}

export default App