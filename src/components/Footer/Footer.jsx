import { Link } from "react-router-dom";
import { Mail, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import styles from "./footer.module.css";

// Lucide-react doesn't include branded logos (Instagram/Facebook/Twitter),
// so these are small custom inline icons instead.
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.5-1.6-4-1.7-5.6-.2-1 .9-1.5 2.3-1.2 3.6C8.3 8.5 5 6.8 2.8 4c-1.2 2.1-.6 4.8 1.4 6.2-.6 0-1.2-.2-1.8-.5v.1c0 2.2 1.6 4 3.6 4.5-.6.1-1.3.2-2 .1.6 1.8 2.2 3.1 4.2 3.1-1.6 1.2-3.6 2-5.8 2-.4 0-.7 0-1.1-.1 2 1.3 4.4 2 7 2 8.4 0 13-7 13-13v-.6c.9-.6 1.6-1.4 2.2-2.3z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Trust strip */}
      <div className={styles.trustStrip}>
        <div className={styles.trustItem}>
          <Truck size={20} />
          <span>Free shipping over $50</span>
        </div>
        <div className={styles.trustItem}>
          <RotateCcw size={20} />
          <span>14-day easy returns</span>
        </div>
        <div className={styles.trustItem}>
          <ShieldCheck size={20} />
          <span>Secure checkout</span>
        </div>
      </div>

      <div className={styles.main}>
        {/* Brand column */}
        <div className={styles.column}>
          <h2 className={styles.logo}>INVICTA</h2>
          <p className={styles.tagline}>
            Timeless elegance, crafted for you. Fresh drops every week.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          </div>
          <div className={styles.adminlink}>
          <li><Link to="/adminpanel">Admin Panel</Link></li>
          </div>
        </div>

        {/* Shop links */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Shop</h3>
          <ul className={styles.linkList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/footwear">Footwear</Link></li>
            <li><Link to="/category/men's-wear">Men's Wear</Link></li>
            <li><Link to="/category/women's-wear">Women's Wear</Link></li>
            <li><Link to="/category/watches">Watches</Link></li>
          </ul>
        </div>

        {/* Customer service links */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Customer Service</h3>
          <ul className={styles.linkList}>
            <li><Link to="/cart">Your Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Stay in the Loop</h3>
          <p className={styles.newsletterText}>
            Get early access to new arrivals and exclusive offers.
          </p>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.inputWrapper}>
              <Mail size={16} className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Invicta. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;