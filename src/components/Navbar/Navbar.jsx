import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { useCart } from "../../context/cartcontext.jsx";


const Navbar= () => {
   const { cartCount } = useCart();
    return (
        <div className={styles.parent}>
        <nav className={styles.navbar}>
<Link to="/" className={styles.logo}>
  <img src={Logo} alt="logo" height={"100px"} />
  <p className={styles.name}>INVICTA</p>
</Link>
          <div className={styles.itemstores}>
            <ul><li><Link to="/wishlist" aria-label="wishlist"><Heart /></Link></li></ul>
            <ul><li><Link to="/cart" aria-label="Cart" className={styles.cartLink}>
          <ShoppingCart />
          {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}</Link></li></ul>
            <ul><li><Link aria-label="user account"><User /></Link></li></ul>
          </div>
        </nav>
        </div>
    )
}
export default Navbar;
