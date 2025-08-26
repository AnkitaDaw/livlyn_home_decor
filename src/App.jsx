// import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import ProductDetailsPage from './pages/Product-details';
// import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
// import HomePage from './pages/Home';
// import ShopPage from './pages/Shop';

library.add(fab, faEye, faShoppingCart);

function App() {

  return (
    <>
      <Header />
      <CheckoutPage />
      <Footer />
    </>
  )
}

export default App
