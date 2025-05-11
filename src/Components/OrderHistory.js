import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to fetch order history
    const fetchOrderHistory = async () => {
      try {
        // In a real app, this would be an actual API call:
        // const response = await fetch('/api/orders/history');
        // const data = await response.json();
        
        // Mock data - replace with actual API call
        const mockOrders = [
          {
            id: 'ORD-12345',
            date: '2023-10-15',
            status: 'Delivered',
            total: 285.00,
            items: [
              { id: 1, name: 'Organic Apples', price: 100, quantity: 2 },
              { id: 2, name: 'Fresh Milk', price: 50, quantity: 1 },
              { id: 3, name: 'Whole Wheat Bread', price: 40, quantity: 1 }
            ],
            deliveryAddress: '123 Main St, Cityville, 12345'
          },
          {
            id: 'ORD-67890',
            date: '2023-10-10',
            status: 'Shipped',
            total: 420.50,
            items: [
              { id: 4, name: 'Free Range Eggs', price: 60, quantity: 1 },
              { id: 5, name: 'Organic Chicken', price: 300, quantity: 1 },
              { id: 6, name: 'Basmati Rice', price: 60.50, quantity: 1 }
            ],
            deliveryAddress: '123 Main St, Cityville, 12345'
          }
        ];

        setOrders(mockOrders);
        setLoading(false);
      } catch (err) {
        setError('Failed to load order history');
        setLoading(false);
        console.error('Error fetching order history:', err);
      }
    };

    fetchOrderHistory();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your order history...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
        </div>
        <button 
          className="btn btn-success mt-3"
          onClick={() => window.location.reload()}
        >
          <i className="bi bi-arrow-repeat me-2"></i>Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-success mb-4">
        <i className="bi bi-clock-history me-2"></i>Order History
      </h2>
      
      {orders.length === 0 ? (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <i className="bi bi-box-seam text-muted" style={{ fontSize: '3rem' }}></i>
            <h4 className="mt-3">No orders found</h4>
            <p className="text-muted">You haven't placed any orders yet.</p>
            <button 
              className="btn btn-success"
              onClick={() => navigate('/products')}
            >
              <i className="bi bi-cart me-2"></i>Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="accordion" id="orderHistoryAccordion">
          {orders.map((order, index) => (
            <div className="accordion-item mb-3 border-0 shadow-sm" key={order.id}>
              <h2 className="accordion-header">
                <button 
                  className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#order-${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                >
                  <div className="d-flex justify-content-between w-100 pe-3">
                    <div>
                      <span className="fw-bold me-3">#{order.id}</span>
                      <span className="badge bg-success">{order.status}</span>
                    </div>
                    <div>
                      <span className="me-3">{new Date(order.date).toLocaleDateString()}</span>
                      <span className="fw-bold">₹{order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </button>
              </h2>
              <div 
                id={`order-${index}`} 
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent="#orderHistoryAccordion"
              >
                <div className="accordion-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <h5 className="fw-bold">Delivery Address</h5>
                      <p>{order.deliveryAddress}</p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold">Payment Method</h5>
                      <p>Credit Card (Ending in 4242)</p>
                    </div>
                  </div>
                  
                  <h5 className="fw-bold mb-3">Order Items</h5>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map(item => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>₹{item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="3" className="fw-bold text-end">Subtotal:</td>
                          <td className="fw-bold">₹{(order.total * 0.95).toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="fw-bold text-end">Tax (5%):</td>
                          <td className="fw-bold">₹{(order.total * 0.05).toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="fw-bold text-end">Total:</td>
                          <td className="fw-bold text-success">₹{order.total.toFixed(2)}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="d-flex justify-content-end mt-3">
                    <button 
                      className="btn btn-outline-success me-2"
                      onClick={() => navigate(`/products`)}
                    >
                      <i className="bi bi-arrow-repeat me-2"></i>Reorder
                    </button>
                    <button 
                      className="btn btn-success"
                      onClick={() => navigate(`/order/${order.id}`)}
                    >
                      <i className="bi bi-receipt me-2"></i>View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <style>
        {`
          .accordion-button:not(.collapsed) {
            background-color: rgba(46, 125, 50, 0.1);
            color: #2e7d32;
          }
          .accordion-button:focus {
            box-shadow: 0 0 0 0.25rem rgba(46, 125, 50, 0.25);
          }
          .badge {
            font-size: 0.8rem;
            padding: 0.35em 0.65em;
          }
          table {
            border-color: #dee2e6;
          }
          thead {
            background-color: #f8f9fa;
          }
        `}
      </style>
    </div>
  );
};

export default OrderHistory;