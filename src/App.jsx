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
import ThemeProvider from "./context/ThemeProvider";
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
      <ThemeProvider>
        <WishlistProvider>
          <Topbar setTheme={setTheme} />
          <Navbar />
          <Categories />
          <Grid />
          <Products />
          <Footer />
        </WishlistProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
