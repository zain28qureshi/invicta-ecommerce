import { useState, useEffect } from "react";
import { Trash2, Heart } from "lucide-react";
import { useCart } from "../../context/cartcontext.jsx";
import styles from "./cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const [selectedIds, setSelectedIds] = useState(() =>
    new Set(cartItems.map((item) => item.id))
  );

  // Track whether the footer is visible, so the fixed bar can
  // "dock" above it instead of overlapping it.
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

  useEffect(() => {
    setSelectedIds((prev) => {
      const next = new Set();
      cartItems.forEach((item) => {
        if (prev.has(item.id)) next.add(item.id);
      });
      return next;
    });
  }, [cartItems.length]);

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty1}>
        <p className={styles.empty2}>Your cart is empty.</p>
      </div>
    );
  }

  const allSelected = selectedIds.size === cartItems.length;

  const toggleAll = () => {
    setSelectedIds(allSelected ? new Set() : new Set(cartItems.map((i) => i.id)));
  };

  const toggleOne = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectedItems = cartItems.filter((item) => selectedIds.has(item.id));
  const selectedTotal = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const selectedCount = selectedItems.length;

  const handleDeleteSelected = () => {
    selectedItems.forEach((item) => removeFromCart(item.id));
  };

  const handleCheckout = () => {
    if (selectedCount === 0) return;
    navigate("/checkout");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your Cart</h1>

        <div className={styles.selectBar}>
          <label className={styles.selectAllLabel}>
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleAll}
            />
            Select All ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
          </label>
          <button
            className={styles.deleteSelectedBtn}
            onClick={handleDeleteSelected}
            disabled={selectedCount === 0}
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>

        <div className={styles.list}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <input
                type="checkbox"
                className={styles.itemCheckbox}
                checked={selectedIds.has(item.id)}
                onChange={() => toggleOne(item.id)}
              />

              <div className={styles.imgarea}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
              </div>

              <div className={styles.details}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>${item.price}</p>

                <div className={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>

              <p className={styles.lineTotal}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div className={styles.itemActions}>
                <button className={styles.wishBtn} aria-label="Move to wishlist">
                  <Heart size={18} />
                </button>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomSpacer} />
      </div>

      <div className={`${styles.fixedBar} ${dockBar ? styles.dockedBar : ""}`}>
        <label className={styles.fixedSelectAll}>
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
          />
          Select All
        </label>

        <p className={styles.fixedTotal}>
          Total ({selectedCount}): <span>${selectedTotal.toFixed(2)}</span>
        </p>

        <button
          className={styles.checkoutBtn}
          onClick={handleCheckout}
          disabled={selectedCount === 0}
        >
          Checkout ({selectedCount})
        </button>
      </div>
    </div>
  );
};

export default Cart;