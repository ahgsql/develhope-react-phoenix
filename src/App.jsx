import "./App.css";
import Topbar from "./components/Topbar/Topbar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Products from "./components/Products/Products.jsx";

import Footer from "./components/Footer/Footer.jsx";
import WishlistProvider from "./context/WishlistProvider";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CustomerExperience from "./components/Footer/CustomerExperience";
import Team from "./components/Misc/Team";
import FloatingButton from "./components/common/FloatingButton";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/Checkout/Checkout";
import MyOrders from "./components/Checkout/MyOrders";
import { CartProvider } from "./context/CartProvider";

function App() {
  function setTheme(theme) {
    //light dark
    document.querySelector("body").setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }
  let theme;
  let check = localStorage.getItem("theme");
  if (check == null || undefined) {
    localStorage.setItem("theme", "light");
    theme = "light";
  } else {
    theme = localStorage.getItem("theme");
  }
  setTheme(theme);
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <Topbar setTheme={setTheme} />
              <Navbar />
              <Categories />

              <Routes>
                <Route
                  path="/"
                  element={[
                    <Grid key={1} />,
                    <Products key={2} />,
                    <CustomerExperience key={3} />,
                    <Team key={4} />,
                  ]}
                ></Route>
                <Route path="/product/:id" element={<ProductDetail />}></Route>
                <Route path="/myorders" element={<MyOrders />}></Route>
              </Routes>
              <FloatingButton />
              <Footer />
              <ToastContainer />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
