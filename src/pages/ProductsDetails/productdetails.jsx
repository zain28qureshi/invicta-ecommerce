import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import styles from "./productdetail.module.css";
import products from "../../data/products.js";
import RatingStars from "../../components/RatingStars/ratingstars.jsx";
import { useCart } from "../../context/cartcontext.jsx";
import { useWishlist } from "../../context/wishlistcontext.jsx";
import { useToast } from "../../context/toast.jsx";
import { generateProductCopy } from "../../utils/productcopy.js";
import ReviewsSection from "../../components/ReviewsSection/reviewsection.jsx";

const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  // Track whether the footer is visible, so the fixed action bar
  // can "dock" above it instead of overlapping it.
  const [dockBar, setDockBar] = useState(false);

  useEffect(() => {
    const footerEl = document.querySelector("footer");
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDockBar(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>No details found of this product.</p>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const { description, highlights } = generateProductCopy(product);

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`Added "${product.name}" to cart`, "cart");
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    showToast(
      wishlisted
        ? `Removed "${product.name}" from wishlist`
        : `Added "${product.name}" to wishlist`,
      "wishlist"
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <p className={styles.breadcrumb}>
          <Link to="/">Home</Link> /{" "}
          <Link to={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}>
            {product.category}
          </Link>{" "}
          / {product.name}
        </p>

        <div className={styles.imagearea}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        <div className={styles.short}>
          <div className={styles.nameRow}>
            <h1 className={styles.productName}>{product.name}</h1>
            <button
              className={styles.wishBtn}
              onClick={handleToggleWishlist}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart fill={wishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          <p className={styles.price}>${product.price}</p>

          <div className={styles.rating}>
            <RatingStars rating={product.rating} />
          </div>

          <p className={styles.stock}>In Stock</p>

          {/* Quantity selector */}
          <div className={styles.quantityRow}>
            <span className={styles.quantityLabel}>Quantity</span>
            <div className={styles.quantityControls}>
              <button onClick={decreaseQty}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>
          </div>

          {/* Description */}
          <p className={styles.description}>{description}</p>

          {/* Highlights */}
          <h3 className={styles.highlightsTitle}>Highlights</h3>
          <ul className={styles.highlightsList}>
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <ReviewsSection product={product} />
          {/* Trust badges */}
          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <Truck size={18} />
              <span>Free shipping over $50</span>
            </div>
            <div className={styles.badge}>
              <RotateCcw size={18} />
              <span>14-day easy returns</span>
            </div>
            <div className={styles.badge}>
              <ShieldCheck size={18} />
              <span>Secure checkout</span>
            </div>
          </div>
        </div>

        {/* Spacer so the action bar never covers content */}
        <div className={styles.bottomSpacer} />
      </div>

      {/* Action bar: fixed while scrolling, docks above the footer */}
      <div className={`${styles.fixedBar} ${dockBar ? styles.dockedBar : ""}`}>
        <div className={styles.fixedInfo}>
          <p className={styles.fixedName}>{product.name}</p>
          <p className={styles.fixedPrice}>
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
        <div className={styles.fixedButtons}>
          <button className={styles.addToCartBtn} onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className={styles.buyNowBtn} onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;