import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './pages/ProductListing.jsx';
import Header from './components/Navbar.jsx';
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
  }

  if (loading) {
    return (
      <div>Loading products...</div>
    )
  }

  return (
    <>
      <Header />
      <main className='store-page'>
        <div className='container'>
          <div className='row g-4'>
            {products.map((product) => (
              <div className='col-12 col-sm-6 col-lg-4 col-xl-3' key={product.id}>
                <div className='store-item'>
                  {loading ? loading :
                    <CardItem className="h-100" product={product} />
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer position="top-right"
          autoClose={1000}
          limit={1}
          closeOnClick />
      </main>
    </>
  )
}

export default App