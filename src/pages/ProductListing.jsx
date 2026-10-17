import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

function CardItem({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevcart) => {
      return [...prevcart, { ...product, quantity: 1 }];
    })
    // Display a toast notification when the product is added to the cart
    toast.info(`${product.title} added to cart!`,{autoClose : 1000,});
    navigate('/cart');
  }

  return (
    <Card className='cardi h-100'>
      <div className='cardi-media'>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className='cardi-img'
        />
      </div>

      <Card.Body className='cardi-body d-flex flex-column'>
        <Card.Title className='cardi-title' title={product.title}>
          {product.title}
        </Card.Title>
        <Card.Text className='cardi-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='cardi-btn mt-auto' onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
        
      </Card.Body>

      {/* Scoped styles */}
      <style>{`
        .cardi {
          --ci-ink: #12161f;
          --ci-soft: #5a6272;
          --ci-line: #e2e5eb;
          --ci-amber: #f5b83d;

          overflow: hidden;
          border: 1px solid var(--ci-line);
          border-radius: 18px;
          background-color: #fff;
          color: var(--ci-ink);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .cardi:hover {
          border-color: #c9cfda;
          box-shadow: 0 10px 28px rgba(18, 22, 31, 0.08);
        }

        /* Image */
        .cardi .cardi-media {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          padding: 1.5rem;
          border-bottom: 1px solid var(--ci-line);
          background-color: #fff;
        }
        .cardi .cardi-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }
        .cardi:hover .cardi-img {
          transform: scale(1.04);
        }

        /* Text */
        .cardi .cardi-body {
          padding: 1.1rem 1.25rem 1.25rem;
        }
        .cardi .cardi-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.7em;
          margin-bottom: 0.5rem;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }
        .cardi .cardi-text {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 1.1rem;
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--ci-soft);
        }

        /* Button */
        .cardi .cardi-btn {
          --bs-btn-color: #1b1303;
          --bs-btn-bg: var(--ci-amber);
          --bs-btn-border-color: var(--ci-amber);
          --bs-btn-hover-color: #1b1303;
          --bs-btn-hover-bg: #ffc95c;
          --bs-btn-hover-border-color: #ffc95c;
          --bs-btn-active-color: #1b1303;
          --bs-btn-active-bg: #e7a82a;
          --bs-btn-active-border-color: #e7a82a;
          --bs-btn-focus-shadow-rgb: 245, 184, 61;
          --bs-btn-border-radius: 999px;

          padding: 0.6rem 1rem;
          font-weight: 600;
        }

        @media (prefers-reduced-motion: reduce) {
          .cardi,
          .cardi .cardi-img { transition: none; }
          .cardi:hover .cardi-img { transform: none; }
        }
      `}</style>
    </Card>
  );
}

export default CardItem;