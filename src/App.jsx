import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Routine from "./pages/Routine";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [wishlistItems, setWishlistItems] = useState([]);

  // ORDER STATE
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("skinEditOrders");

    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // SAVE ORDER
  const addOrder = (newOrder) => {
    setOrders((previousOrders) => {
      const updatedOrders = [newOrder, ...previousOrders];

      localStorage.setItem(
        "skinEditOrders",
        JSON.stringify(updatedOrders)
      );

      return updatedOrders;
    });
  };

  return (
    <BrowserRouter>
      <div className="app">

        {/* NAVBAR */}

        <Navbar
          cartItems={cartItems}
          wishlistItems={wishlistItems}
        />


        {/* ROUTES */}

        <Routes>

          {/* LOGIN */}

          <Route
            path="/login"
            element={<Login />}
          />


          {/* REGISTER */}

          <Route
            path="/register"
            element={<Register />}
          />


          {/* PROFILE */}

          <Route
            path="/profile"
            element={<Profile />}
          />


          {/* ORDER SUCCESS */}

          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />


          {/* ORDERS */}

          <Route
            path="/orders"
            element={
              <Orders
                orders={orders}
              />
            }
          />


          {/* CHECKOUT */}

          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                setCartItems={setCartItems}
                addOrder={addOrder}
              />
            }
          />


          {/* HOME */}

          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                setCartItems={setCartItems}
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
              />
            }
          />


          {/* SHOP */}

          <Route
            path="/shop"
            element={
              <Shop
                cartItems={cartItems}
                setCartItems={setCartItems}
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
              />
            }
          />


          {/* PRODUCT DETAILS */}

          <Route
            path="/product/:id"
            element={
              <ProductDetails
                cartItems={cartItems}
                setCartItems={setCartItems}
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
              />
            }
          />


          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* ROUTINE */}

          <Route
            path="/routine"
            element={<Routine />}
          />


          {/* CART */}

          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />


          {/* WISHLIST */}

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />

        </Routes>


        {/* FOOTER */}

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;