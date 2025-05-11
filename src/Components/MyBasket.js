import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const MyBasket = () => {
  const navigate = useNavigate();
  const [basketItems, setBasketItems] = useState([
    { id: 1, name: 'Organic Apples', price: 100, quantity: 2, img: '/images/i3.jpeg' },
    { id: 2, name: 'Fresh Milk', price: 50, quantity: 1, img: '/images/i4.jpeg' },
    { id: 3, name: 'Whole Wheat Bread', price: 40, quantity: 1, img: '/images/i7.jpeg' },
  ]);

  const total = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setBasketItems(basketItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setBasketItems(basketItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div className="container py-5" style={{ maxWidth: '1200px' }}>
      <h2 className="mb-4 text-center text-success fw-bold animate__animated animate__fadeInDown">
        <i className="bi bi-cart3 me-2"></i>My Shopping Basket
      </h2>

      {basketItems.length === 0 ? (
        <div className="alert alert-info text-center animate__animated animate__fadeIn">
          <i className="bi bi-emoji-frown fs-4 me-2"></i>
          Your basket is empty. Start shopping now!
          <button 
            className="btn btn-link text-success fw-bold" 
            onClick={() => navigate('/')}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {basketItems.map(item => (
              <div key={item.id} className="col-md-6 col-lg-4 animate__animated animate__fadeInUp">
                <div className="card h-100 shadow-sm border-0 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                      style={{ 
                        height: '220px', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <span className="badge bg-success position-absolute top-0 end-0 m-2">
                      {item.price}₹
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                    <div className="d-flex align-items-center mb-3">
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span className="mx-3 fw-bold">{item.quantity}</span>
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <h6 className="mb-0 text-success">
                        Subtotal: <span className="fw-bold">{item.price * item.quantity}₹</span>
                      </h6>
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="bi bi-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 bg-light rounded-3 shadow-sm animate__animated animate__fadeIn">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">Order Summary</h4>
              <span className="badge bg-primary rounded-pill">{basketItems.length} items</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>{total}₹</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Delivery:</span>
              <span className="text-success">FREE</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Estimated Tax:</span>
              <span>{(total * 0.05).toFixed(2)}₹</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
              <span>Total:</span>
              <span className="text-success">{(total * 1.05).toFixed(2)}₹</span>
            </div>
            <div className="d-grid gap-3">
              <button 
                className="btn btn-success btn-lg rounded-pill py-3"
                onClick={() => navigate('/checkout')}
              >
                <i className="bi bi-lock-fill me-2"></i>Secure Checkout
              </button>
              <button 
                className="btn btn-outline-success rounded-pill"
                onClick={() => navigate('/')}
              >
                <i className="bi bi-arrow-left me-2"></i>Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}

      <style>
        {`
          .card {
            transition: all 0.3s ease;
            border-radius: 15px !important;
          }
          .card:hover {
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            transform: translateY(-5px);
          }
          .btn-success {
            background-color: #2e7d32;
            border-color: #2e7d32;
          }
          .btn-success:hover {
            background-color: #1b5e20;
            border-color: #1b5e20;
          }
          .quantity-control {
            min-width: 100px;
          }
          .badge {
            font-size: 0.8rem;
            padding: 0.35em 0.65em;
          }
        `}
      </style>
    </div>
  );
};

export default MyBasket;