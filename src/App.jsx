import Home from './pages/Home/home.jsx';
import { Routes, Route, useLocation } from "react-router-dom";
import CategoryPage from "./pages/Categories/categoriespage.jsx";
import Productdetailedpage from "./pages/ProductsDetails/productdetails.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css';
import Cart from "./pages/Cart/Cart.jsx";
import Wishlist from "./pages/wishlist/wishlist.jsx";
import Checkout from "./pages/checkout/checkout.jsx";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/checkout";

  return (
    <>
      <Navbar />
      <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Productdetailedpage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;


