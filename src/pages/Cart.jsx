import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Navbar'
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

function Cart() {
    // addToCart comes from the context (it was used below but never defined)
    const { cart, addToCart } = useContext(CartContext);
    console.log(cart);

    return (
        <div className='cartc-page'>
            <Header />

            <main className='cartc-main container'>
                {cart.map((item) => {
                    return (
                        <Card className='cartc' key={item.id}>
                            <div className='cartc-media'>
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    alt={item.title}
                                    className='cartc-img'
                                />
                            </div>

                            <Card.Body className='cartc-body d-flex flex-column'>
                                <Card.Title className='cartc-title' title={item.title}>
                                    {item.title}
                                </Card.Title>
                                <Card.Text className='cartc-text'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='cartc-actions mt-auto'>
                                    <Button variant="primary" className='cartc-btn' onClick={() => addToCart(item)}>
                                        Checkout
                                    </Button>

                                    {/* Quantity stepper (design only, not wired up yet) */}
                                    <div className='cartc-qty' role="group" aria-label={`Quantity for ${item.title}`}>
                                        <button type="button" aria-label={`Decrease quantity of ${item.title}`}>
                                            −
                                        </button>
                                        <span>{item.quantity ?? 1}</span>
                                        <button type="button" aria-label={`Increase quantity of ${item.title}`}>
                                            +
                                        </button>
                                    </div>

                                    {/* Remove (design only, not wired up yet) */}
                                    <button type="button" className='cartc-remove' aria-label={`Remove ${item.title}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg>
                                        Remove
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}
            </main>

            {/* Scoped styles */}
            <style>{`
                .cartc-page {
                    --ci-ink: #12161f;
                    --ci-soft: #5a6272;
                    --ci-line: #e2e5eb;
                    --ci-amber: #f5b83d;

                    min-height: 100vh;
                    background-color: #f5f6f8;
                    color: var(--ci-ink);
                    font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
                }
                .cartc-main {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 860px;
                    padding-top: 2.5rem;
                    padding-bottom: 4rem;
                }

                /* Item row */
                .cartc {
                    display: grid;
                    grid-template-columns: 170px 1fr;
                    overflow: hidden;
                    border: 1px solid var(--ci-line);
                    border-radius: 20px;
                    background-color: #fff;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                .cartc:hover {
                    border-color: #c9cfda;
                    box-shadow: 0 10px 28px rgba(18, 22, 31, 0.08);
                }

                /* Image */
                .cartc .cartc-media {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1.25rem;
                    border-right: 1px solid var(--ci-line);
                    background-color: #fff;
                }
                .cartc .cartc-img {
                    width: 100%;
                    max-height: 150px;
                    object-fit: contain;
                    transition: transform 0.4s ease;
                }
                .cartc:hover .cartc-img {
                    transform: scale(1.04);
                }

                /* Text */
                .cartc .cartc-body {
                    padding: 1.25rem 1.5rem;
                }
                .cartc .cartc-title {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 0.4rem;
                    font-size: 1.1rem;
                    font-weight: 700;
                    letter-spacing: -0.015em;
                    line-height: 1.35;
                }
                .cartc .cartc-text {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 1rem;
                    font-size: 0.92rem;
                    line-height: 1.55;
                    color: var(--ci-soft);
                }

                /* Button */
                .cartc .cartc-btn {
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

                    padding: 0.55rem 1.4rem;
                    font-weight: 600;
                }

                /* Actions row */
                .cartc .cartc-actions {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.6rem 0.9rem;
                }

                /* Quantity stepper */
                .cartc .cartc-qty {
                    display: inline-flex;
                    align-items: center;
                    border: 1.5px solid var(--ci-line);
                    border-radius: 999px;
                    background-color: #fff;
                }
                .cartc .cartc-qty button {
                    width: 36px;
                    height: 36px;
                    border: 0;
                    border-radius: 999px;
                    background: transparent;
                    color: var(--ci-ink);
                    font-size: 1.2rem;
                    line-height: 1;
                    cursor: pointer;
                    transition: background-color 0.15s ease;
                }
                .cartc .cartc-qty button:hover {
                    background-color: #eceff5;
                }
                .cartc .cartc-qty span {
                    min-width: 28px;
                    text-align: center;
                    font-weight: 600;
                }

                /* Remove button */
                .cartc .cartc-remove {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    margin-left: auto;
                    padding: 0.5rem 0.8rem;
                    border: 0;
                    border-radius: 999px;
                    background: transparent;
                    color: var(--ci-soft);
                    font-size: 0.92rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.15s ease, color 0.15s ease;
                }
                .cartc .cartc-remove:hover {
                    background-color: #fdecec;
                    color: #c93a3a;
                }
                .cartc .cartc-qty button:focus-visible,
                .cartc .cartc-remove:focus-visible {
                    outline: 3px solid var(--ci-amber);
                    outline-offset: 2px;
                }

                @media (max-width: 575.98px) {
                    .cartc-main { padding-top: 1.5rem; }
                    .cartc { grid-template-columns: 110px 1fr; }
                    .cartc .cartc-media { padding: 0.75rem; }
                    .cartc .cartc-body { padding: 1rem; }
                    .cartc .cartc-text { display: none; }
                    .cartc .cartc-btn { flex: 1 1 100%; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .cartc,
                    .cartc .cartc-img,
                    .cartc .cartc-qty button,
                    .cartc .cartc-remove { transition: none; }
                    .cartc:hover .cartc-img { transform: none; }
                }
            `}</style>
        </div>
    )
}

export default Cart