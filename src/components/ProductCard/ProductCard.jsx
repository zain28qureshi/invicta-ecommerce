import { Link, useNavigate } from "react-router-dom";
import { Heart } from 'lucide-react';
import styles from "./productcard.module.css";
import RatingStars from '../RatingStars/ratingstars.jsx';
import { useCart } from "../../context/cartcontext.jsx";
import { useWishlist } from "../../context/wishlistcontext.jsx";
import { useToast } from "../../context/toast.jsx";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { toggleWishlist, isWishlisted } = useWishlist();
    const { showToast } = useToast();
    const wishlisted = isWishlisted(product.id);

    const handleAddToCart = () => {
        addToCart(product);
        showToast(`Added "${product.name}" to cart`, "cart");
    };

    const handleBuyNow = () => {
        addToCart(product);
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
        <div className={styles.parent}>
            <div className={styles.productcard}>
               <Link to={`/product/${product.id}`}>
                <div className={styles.image}>
                <img src={product.image} alt="Product Image" width={300}></img>
                </div>
                <p className={styles.productname}>{product.name}</p>
                <p className={styles.productprice}>${product.price}</p>
                <div className={styles.rating}>
                  <RatingStars rating={product.rating} />
                </div>
                </Link>
                <div className={styles.buttons}>
                    <button
                      className={styles.buy}
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                    <button
                      className={styles.buy}
                      onClick={handleBuyNow}
                    >
                      Buy now
                    </button>
                    <button
                      className={styles.wishlist}
                      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                      onClick={handleToggleWishlist}
                    >
                      <Heart fill={wishlisted ? "currentColor" : "none"} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;