import Home from "./pages/Home/home.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import CategoryPage from "./pages/Categories/categoriespage.jsx";
import Productdetailedpage from "./pages/ProductsDetails/productdetails.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

import Cart from "./pages/Cart/cart.jsx";
import Wishlist from "./pages/wishlist/wishlist.jsx";
import Checkout from "./pages/checkout/checkout.jsx";

// Admin
import AdminLayout from "./pages/adminpanel/adminlayout.jsx";
import DashboardContent from "./pages/adminpanel/dashboardcontent.jsx";
import Products from "./pages/adminpanel/products.jsx";
import Orders from "./pages/adminpanel/orders.jsx";
import Users from "./pages/adminpanel/users.jsx";

function App() {
  const location = useLocation();

  // Hide Navbar and Footer on admin pages and checkout
  const isAdmin = location.pathname.startsWith("/adminpanel");
  const hideNavbar = isAdmin;
  const hideFooter = isAdmin || location.pathname === "/checkout";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className={isAdmin ? "app-content-admin" : "app-content"}>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<Productdetailedpage />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin Routes */}
          <Route path="/adminpanel" element={<AdminLayout />}>
            <Route index element={<DashboardContent />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </div>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;