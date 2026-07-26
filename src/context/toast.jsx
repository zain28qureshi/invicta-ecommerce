import { createContext, useContext, useState, useCallback } from "react";
import styles from "./toast.module.css";
import { CheckCircle2, Heart, ShoppingCart } from "lucide-react";

const ToastContext = createContext();

let idCounter = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // type: "cart" | "wishlist" | "success" (controls icon)
  const showToast = useCallback((message, type = "success", duration = 2500) => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const icons = {
    cart: ShoppingCart,
    wishlist: Heart,
    success: CheckCircle2,
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className={styles.toastContainer}>
        {toasts.map((toast) => {
          const Icon = icons[toast.type] || CheckCircle2;
          return (
            <div key={toast.id} className={styles.toast}>
              <Icon size={18} className={styles.toastIcon} />
              <span>{toast.message}</span>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);