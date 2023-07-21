import "./App.css";
import Topbar from "./components/Topbar/Topbar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Products from "./components/Products/Products.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WishlistProvider from "./context/WishlistProvider";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <WishlistProvider>
        <Topbar theme={theme} />
        <Navbar />
        <Categories />
        <Grid />
        <Products />
        <Footer />
      </WishlistProvider>
    </>
  );
}

export default App;
