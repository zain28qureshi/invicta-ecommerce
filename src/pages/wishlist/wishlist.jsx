import { Link } from "react-router-dom";
import { Trash2, ShoppingCart } from "lucide-react";
import { useWishlist } from "../../context/wishlistcontext.jsx";
import { useCart } from "../../context/cartcontext.jsx";
import RatingStars from "../../components/RatingStars/ratingstars.jsx";
import styles from "./wishlist.module.css";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.empty1}>
        <p className={styles.empty2}>Your wishlist is empty.</p>
      </div>
    );
  }

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Wishlist</h1>

      <div className={styles.grid}>
        {wishlistItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <button
              className={styles.removeBtn}
              onClick={() => removeFromWishlist(item.id)}
              aria-label={`Remove ${item.name} from wishlist`}
            >
              <Trash2 size={16} />
            </button>

            <Link to={`/product/${item.id}`} className={styles.imgLink}>
              <img src={item.image} alt={item.name} className={styles.image} />
            </Link>

            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>${item.price}</p>
            <p className={styles.rating}>
              <RatingStars rating={item.rating} />
            </p>

            <button
              className={styles.moveBtn}
              onClick={() => handleMoveToCart(item)}
            >
              <ShoppingCart size={16} /> Move to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;