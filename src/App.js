import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MyAccount from './Components/MyAccount';
import MyBasket from './Components/MyBasket';
import Payment from './Components/Payment';
import OrderHistory from './Components/OrderHistory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/mybasket" element={<MyBasket />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/orderhistory" element={<OrderHistory />} />

      </Routes>
    </Router>
  );
};

export default App;