import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="checkout/" element={<Checkout />} />
        <Route path="payment/" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//  There are 4 pages products, cart, checkout, payment.
//!!!!  max-w-screen-2xl mx-auto --- for making responsive
