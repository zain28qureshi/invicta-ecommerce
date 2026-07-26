import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Truck, CheckCircle2, Wallet, Landmark, Banknote } from "lucide-react";
import { useCart } from "../../context/cartcontext.jsx";
import styles from "./checkout.module.css";

// Flat delivery + platform fee, same idea as Daraz's breakdown
const DELIVERY_FEE = 5;
const PLATFORM_FEE = 1;

const PAYMENT_METHODS = [
  { id: "jazzcash", label: "JazzCash", icon: Wallet },
  { id: "easypaisa", label: "EasyPaisa", icon: Wallet },
  { id: "bank", label: "Bank Transfer", icon: Landmark },
  { id: "cod", label: "Cash on Delivery", icon: Banknote },
];

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // steps: "summary" -> "payment" -> "processing" -> "success"
  const [step, setStep] = useState("summary");
  const [selectedMethod, setSelectedMethod] = useState("cod");

  const grandTotal = cartTotal + DELIVERY_FEE + PLATFORM_FEE;

  if (cartItems.length === 0 && step !== "success") {
    return (
      <div className={styles.empty}>
        <p>Your cart is empty. Add something before checking out.</p>
      </div>
    );
  }

  const handleConfirmOrder = () => {
    setStep("processing");
    // Simulate order processing time
    setTimeout(() => {
      setStep("success");
      clearCart();
    }, 2600);
  };

  // ---------- STEP: PROCESSING ----------
  if (step === "processing") {
    return (
      <div className={styles.processingScreen}>
        <div className={styles.truckTrack}>
          <Truck size={48} className={styles.truckIcon} />
        </div>
        <p className={styles.processingText}>Processing your order...</p>
        <p className={styles.processingSubtext}>Please don't close this page</p>
      </div>
    );
  }

  // ---------- STEP: SUCCESS ----------
  if (step === "success") {
    return (
      <div className={styles.successOverlay}>
        <div className={styles.successCard}>
          <CheckCircle2 size={56} className={styles.successIcon} />
          <h2 className={styles.successTitle}>Your order is placed!</h2>
          <p className={styles.successSubtext}>
            Total paid: ${grandTotal.toFixed(2)} via{" "}
            {PAYMENT_METHODS.find((m) => m.id === selectedMethod)?.label}
          </p>
          <button
            className={styles.successBtn}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // ---------- STEP: PAYMENT ----------
  if (step === "payment") {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Select Payment Method</h1>

          <div className={styles.paymentList}>
            {PAYMENT_METHODS.map(({ id, label, icon: Icon }) => (
              <label
                key={id}
                className={`${styles.paymentOption} ${
                  selectedMethod === id ? styles.paymentOptionSelected : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={id}
                  checked={selectedMethod === id}
                  onChange={() => setSelectedMethod(id)}
                />
                <Icon size={20} />
                <span>{label}</span>
              </label>
            ))}
          </div>

          <div className={styles.bottomSpacer} />
        </div>

        <div className={styles.fixedBar}>
          <div>
            <p className={styles.fixedLabel}>Total Payable</p>
            <p className={styles.fixedTotal}>${grandTotal.toFixed(2)}</p>
          </div>
          <button className={styles.payBtn} onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>
    );
  }

  // ---------- STEP: SUMMARY (default) ----------
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Checkout</h1>

        {/* Shipping info block — static for now, no backend */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Shipping & Billing</h3>
            <button className={styles.editLink}>Edit</button>
          </div>
          <p className={styles.shippingName}>Zain Qureshi &nbsp; 03056801499</p>
          <p className={styles.shippingAddress}>
            Talib Ul Mola Colony, Hala, Sindh
          </p>
        </div>

        {/* Order items */}
        <div className={styles.section}>
          <h3 className={styles.sectionHeaderPlain}>
            Order Items ({cartItems.length})
          </h3>
          <div className={styles.itemsList}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.orderItemImage}
                />
                <div className={styles.orderItemDetails}>
                  <p className={styles.orderItemName}>{item.name}</p>
                  <p className={styles.orderItemQty}>Qty: {item.quantity}</p>
                </div>
                <p className={styles.orderItemPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottomSpacer} />
      </div>

      {/* Fixed bottom summary bar */}
      <div className={styles.fixedBar}>
        <div className={styles.fixedSummary}>
          <div className={styles.fixedRow}>
            <span>Items Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className={styles.fixedRow}>
            <span>Delivery Fee</span>
            <span>${DELIVERY_FEE.toFixed(2)}</span>
          </div>
          <div className={styles.fixedRow}>
            <span>Platform Fee</span>
            <span>${PLATFORM_FEE.toFixed(2)}</span>
          </div>
          <div className={styles.fixedRowTotal}>
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        <button className={styles.payBtn} onClick={() => setStep("payment")}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;