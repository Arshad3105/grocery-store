import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { total } = location.state || { total: 0 };
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError('');

    try {
      // Simulate API call to your backend
      const response = await processPayment({
        amount: total,
        paymentMethod,
        cardDetails
      });

      if (response.success) {
        navigate('/order-confirmation', {
          state: {
            orderId: response.orderId,
            amount: total
          }
        });
      } else {
        setError(response.message || 'Payment failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setProcessing(false);
    }
  };

  // This would be replaced with actual API call to your backend
  const processPayment = async (paymentData) => {
    console.log('Processing payment:', paymentData);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate successful payment 80% of the time
    const success = Math.random() > 0.2;
    return {
      success,
      orderId: success ? `ORD-${Math.floor(Math.random() * 1000000)}` : null,
      message: success ? '' : 'Payment declined by bank'
    };
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 animate__animated animate__fadeIn">
            <div className="card-header bg-success text-white">
              <h3 className="mb-0">
                <i className="bi bi-credit-card me-2"></i>Secure Payment Gateway
              </h3>
            </div>
            <div className="card-body p-4">
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                You will be charged: <strong>₹{(total * 1.05).toFixed(2)}</strong> (includes 5% tax)
              </div>

              {error && (
                <div className="alert alert-danger animate__animated animate__shakeX">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h5 className="mb-3">Payment Method</h5>
                  <div className="btn-group w-100" role="group">
                    <button
                      type="button"
                      className={`btn ${paymentMethod === 'credit' ? 'btn-success' : 'btn-outline-success'}`}
                      onClick={() => setPaymentMethod('credit')}
                    >
                      <i className="bi bi-credit-card me-2"></i>Credit Card
                    </button>
                    <button
                      type="button"
                      className={`btn ${paymentMethod === 'debit' ? 'btn-success' : 'btn-outline-success'}`}
                      onClick={() => setPaymentMethod('debit')}
                    >
                      <i className="bi bi-card-text me-2"></i>Debit Card
                    </button>
                    <button
                      type="button"
                      className={`btn ${paymentMethod === 'upi' ? 'btn-success' : 'btn-outline-success'}`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      <i className="bi bi-phone me-2"></i>UPI
                    </button>
                  </div>
                </div>

                {['credit', 'debit'].includes(paymentMethod) && (
                  <div className="mb-4 animate__animated animate__fadeIn">
                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Cardholder Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="John Doe"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Expiry Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="123"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-shield-lock text-success me-2"></i>
                      <small className="text-muted">Your payment is secured with 256-bit encryption</small>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="mb-4 animate__animated animate__fadeIn">
                    <div className="mb-3">
                      <label className="form-label">UPI ID</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="yourname@upi"
                        required
                      />
                    </div>
                    <div className="alert alert-warning">
                      <i className="bi bi-exclamation-triangle me-2"></i>
                      You will be redirected to your UPI app for payment confirmation
                    </div>
                  </div>
                )}

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg py-3"
                    disabled={processing}
                  >
                    {processing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-lock-fill me-2"></i>
                        Pay ₹{(total * 1.05).toFixed(2)}
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                  >
                    <i className="bi bi-arrow-left me-2"></i>Back to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .card {
            border-radius: 15px;
            overflow: hidden;
          }
          .btn-group .btn {
            transition: all 0.3s ease;
          }
          .form-control {
            border-radius: 10px;
            padding: 12px 15px;
          }
          .btn-success {
            background-color: #2e7d32;
            border-color: #2e7d32;
          }
          .btn-success:hover {
            background-color: #1b5e20;
            border-color: #1b5e20;
          }
        `}
      </style>
    </div>
  );
};

export default Payment;