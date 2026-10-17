import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import CartContext from './Context/CartContext';

function Header({ cartCount = 0 }) {
  const {cart} = useContext(CartContext);

  return (
    <Navbar expand="lg" sticky="top" className="hdr" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="hdr-brand d-flex align-items-center gap-2">
          <span className="hdr-mark d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg>
          </span>
          <span>Amazon</span>
        </Navbar.Brand>
        <Nav.Link
          href="#cart"
          className="hdr-cart ms-auto ms-lg-0 me-2 me-lg-0"
          aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          <span className="hdr-cart-count" aria-hidden="true">
            {cart.length}
          </span>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="hdr-toggle shadow-none" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Scoped styles */}
      <style>{`
        .hdr {
          --hdr-bg: #12161f;
          --hdr-line: rgba(255, 255, 255, 0.08);
          --hdr-amber: #f5b83d;

          --bs-navbar-color: rgba(255, 255, 255, 0.68);
          --bs-navbar-hover-color: #fff;
          --bs-navbar-active-color: #fff;
          --bs-navbar-padding-y: 0.7rem;

          background-color: var(--hdr-bg);
          border-bottom: 1px solid var(--hdr-line);
          font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
        }

        /* Brand */
        .hdr .hdr-brand {
          margin-right: 0;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .hdr .hdr-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background-color: var(--hdr-amber);
          color: #1b1303;
        }

        /* Links */
        .hdr .nav-link {
          padding: 0.5rem 0.9rem;
          font-weight: 500;
          transition: color 0.15s ease;
        }
        .hdr .nav-link.active,
        .hdr .nav-link.show {
          font-weight: 600;
        }

        /* Cart icon button */
        .hdr .hdr-cart {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #fff;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .hdr .hdr-cart:hover {
          border-color: var(--hdr-amber);
          background-color: var(--hdr-amber);
          color: #1b1303;
        }

        /* Cart count badge */
        .hdr .hdr-cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          min-width: 20px;
          height: 20px;
          padding: 0 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--hdr-bg);
          border-radius: 999px;
          background-color: #fff;
          color: #12161f;
          font-size: 0.7rem;
          font-weight: 700;
          line-height: 1;
          box-sizing: content-box;
        }

        @media (min-width: 992px) {
          /* Keep the cart at the far right, after the menu */
          .hdr .hdr-cart { order: 3; }
          .hdr .navbar-collapse { order: 2; }
        }

        /* Mobile toggle + collapsed menu */
        .hdr .hdr-toggle {
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        @media (max-width: 991.98px) {
          .hdr .navbar-collapse {
            margin-top: 0.75rem;
            padding-top: 0.5rem;
            border-top: 1px solid var(--hdr-line);
          }
        }

        /* Keyboard focus */
        .hdr a:focus-visible,
        .hdr .nav-link:focus-visible,
        .hdr .hdr-toggle:focus-visible {
          outline: 2px solid var(--hdr-amber);
          outline-offset: 3px;
          border-radius: 8px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hdr * { transition: none !important; }
        }
      `}</style>
    </Navbar>
  );
}

export default Header;