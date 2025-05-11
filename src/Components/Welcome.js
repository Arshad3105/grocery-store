import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate, Link } from 'react-router-dom';

const theme = {
  primary: '#2e7d32',       // Dark Green
  primaryLight: '#388e3c',  // Medium Green
  primaryDark: '#1b5e20',    // Darker Green
  secondary: '#b2ff59',      // Light Green
  accent: '#00c853',         // Bright Green
  background: '#e8f5e9',     // Very Light Green
  text: '#ffffff',           // White for contrast
  textSecondary: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
};

const Welcome = () => {
  const navigate = useNavigate();

  const styles = {
    slideBar: {
      background: `linear-gradient(to bottom, ${theme.primary}, ${theme.primaryLight})`,
      position: 'fixed',
      left: 0,
      top: 0,
      width: '270px',
      height: '100vh',
      boxShadow: '5px 0 15px rgba(0,0,0,0.2)',
      zIndex: 999,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    navbar: {
      background: `linear-gradient(to right, ${theme.accent}, ${theme.secondary})`,
    },
    heroBanner: {
      background: 'url(https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80) no-repeat center center/cover',
    },
    footer: {
      background: `linear-gradient(to right, ${theme.primary}, ${theme.primaryLight})`,
    },
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Enhanced Slide Bar */}
      <div className="slide-bar animate__animated animate__fadeInLeft" style={styles.slideBar}>
        <div className="text-center mb-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            height="60"
            className="mb-2 animate__animated animate__rotateIn"
          />
          <h4 className="text-white mb-3 animate__animated animate__pulse">GroceryStore</h4>
        </div>

        <div className="search-box mb-4 animate__animated animate__fadeIn animate__delay-1s">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search..."
            />
            <button className="btn btn-sm btn-success" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h6 className="text-white-50 mb-3">MENU</h6>
          <ul className="list-unstyled">
            {[
              { name: 'Dashboard', icon: 'bi bi-grid' },
              { name: 'My Account', icon: 'bi bi-person', link: '/myaccount' },
              { name: 'My Basket', icon: 'bi bi-basket' , link:'/mybasket' },
              { name: 'Order History', icon: 'bi bi-clock-history' , link: '/orderhistory' },
              { name: 'My Wallet', icon: 'bi bi-wallet2' },
              { name: 'Wishlist', icon: 'bi bi-heart' },
              { name: 'Settings', icon: 'bi bi-gear' },
              { name: 'Help Center', icon: 'bi bi-question-circle' },
            ].map((item, i) => (
              <li key={i} className="mb-2">
                {item.link ? (
                  <Link
                    to={item.link}
                    className="text-white text-decoration-none d-flex align-items-center p-2 rounded hover-bg"
                  >
                    <i className={`${item.icon} me-2`}></i>
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="text-white text-decoration-none d-flex align-items-center p-2 rounded hover-bg"
                  >
                    <i className={`${item.icon} me-2`}></i>
                    <span>{item.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h6 className="text-white-50 mb-3">QUICK LINKS</h6>
          <ul className="list-unstyled">
            {[
              { name: 'Home', icon: 'bi bi-house', link: '/' },
              { name: 'Shop', icon: 'bi bi-shop', link: '/shop' },
              { name: 'Deals', icon: 'bi bi-tag', link: '/deals' },
              { name: 'New Arrivals', icon: 'bi bi-star', link: '/new' },
              { name: 'Contact', icon: 'bi bi-envelope', link: '/contact' },
            ].map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href={item.link}
                  className="text-white text-decoration-none d-flex align-items-center p-2 rounded hover-bg"
                >
                  <i className={`${item.icon} me-2`}></i>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="offer-card p-3 rounded mb-4 animate__animated animate__fadeIn animate__delay-2s"
          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
        >
          <h6 className="text-warning mb-3">SPECIAL OFFER</h6>
          <p className="small text-white mb-3">Get 25% off on your first order!</p>
          <button className="btn btn-sm btn-warning w-100">Claim Now</button>
        </div>

        <div className="social-links">
          <h6 className="text-white-50 mb-3">FOLLOW US</h6>
          <div className="d-flex justify-content-between">
            {['facebook', 'twitter', 'instagram', 'youtube'].map((platform, i) => (
              <a key={i} href="#" className="text-white">
                <i className={`bi bi-${platform} fs-5`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ marginLeft: '270px', width: '100%' }}>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg shadow-sm py-3 animate__animated animate__fadeInDown"
          style={styles.navbar}
        >
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center text-white" href="#">
              <img
                src="/images/logo.png"
                alt="Logo"
                height="50"
                className="me-2 animate__animated animate__rotateIn"
              />
              <span className="fw-bold fs-4">GroceryStore</span>
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto ms-3">
                {['Home', 'Fruits', 'Vegetables', 'Beverages', 'Dairy', 'Snacks', 'Location'].map((link, i) => (
                  <li className="nav-item" key={i}>
                    <a className="nav-link fw-semibold text-white hover-glow" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <form className="d-flex me-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for products"
                />
                <button className="btn btn-light" type="submit">
                  Search
                </button>
              </form>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-light animate__animated animate__pulse animate__infinite"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Enhanced Hero Banner with Image */}
        <section
          className="hero-banner position-relative overflow-hidden animate__animated animate__fadeIn"
          style={styles.heroBanner}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="container position-relative text-white text-center py-5">
            <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown animate__delay-1s">
              Fresh Groceries Delivered to Your Door
            </h1>
            <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-2s">
              Enjoy the freshest produce, dairy, and pantry essentials with our express delivery service
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-success btn-lg px-4 py-2 animate__animated animate__bounceIn animate__delay-3s">
                Shop Now
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-2 animate__animated animate__bounceIn animate__delay-3s">
                Learn More
              </button>
            </div>
          </div>
          <div className="position-absolute bottom-0 end-0 mb-4 me-4 animate__animated animate__zoomIn animate__delay-4s">
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Fresh Produce"
              height="200"
              className="rounded-circle border border-3 border-white shadow-lg"
            />
          </div>
        </section>

        {/* Product Section (optional) */}
        {/* ... your existing product section ... */}

       <section className="product-list animate_animated animate_fadeInUp">
          <h3 className="text-center text-success">Popular Products</h3>
          <div className="products d-flex justify-content-center gap-4 flex-wrap">
            {[ 
              { name: 'Apples', price: '₹100 / kg', img: '/images/i3.jpeg' },
              { name: 'Milk', price: '₹50 / litre', img: '/images/i4.jpeg' },
              { name: 'Bread', price: '₹40 / loaf', img: '/images/i7.jpeg' },
              { name: 'Basmati Rice', price: '₹120 / kg', img: '/images/rice.jpg' },
              { name: 'Eggs (12 pack)', price: '₹90 / dozen', img: '/images/egg.jpg' },
              { name: 'Bananas', price: '₹30 / dozen', img: '/images/banana.jpg' },
              { name: 'Yogurt', price: '₹25 / cup', img: '/images/eggs.jpg' },
            ].map((product, index) => (
              <div key={index} className="product-card animate_animated animate_fadeInUp text-center">
                <img src={product.img} alt={product.name} width="150" height="150" className="mb-2" />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-white mt-5 pt-4 pb-2" style={{ background: 'linear-gradient(90deg, #56ab2f, #a8e063)' }}>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4 mb-3">
                <h5>About Us</h5>
                <p className="small">
                  GroceryStore is your go-to platform for fresh produce, dairy, and groceries at your fingertips.
                </p>
              </div>
              <div className="col-md-4 mb-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled small">
                  <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                  <li><a href="#" className="text-white text-decoration-none">Shop</a></li>
                  <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-3">
                <h5>Contact</h5>
                <p className="small mb-1">Email: support@grocerystore.com</p>
                <p className="small mb-0">Phone: +91 12345 67890</p>
              </div>
            </div>
            <hr className="border-white" />
            <p className="small mb-0">&copy; 2025 GroceryStore. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style>
        {`
          .product-card {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .navbar-nav .nav-item .nav-link {
            padding: 10px 20px;  /* Uniform button padding */
            font-size: 16px;     /* Same font size */
          }
        `}
      </style>

     

      
      <style>
        {`
          .product-card {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .navbar-nav .nav-item .nav-link {
            padding: 10px 20px;  /* Uniform button padding */
            font-size: 16px;     /* Same font size */
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;