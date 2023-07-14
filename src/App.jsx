import "./App.css";
import Topbar from "./components/Topbar/Topbar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Products from "./components/Products/Products.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Categories />
      <Grid />
      <Products />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
