// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import CheckoutPage from './pages/Checkout';
// import ThankyouPage from './pages/Thank-you';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import CartPage from "./pages/Cart";
import ProductDetailsPage from "./pages/Product-details";

library.add(fab, faEye, faShoppingCart, faChevronRight);

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/#featured" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/#review" element={<HomePage />} />
        <Route path="/#footer" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-details/:slug" element={<ProductDetailsPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
