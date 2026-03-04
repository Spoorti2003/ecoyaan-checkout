import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import styles from "../styles/Success.module.css";

function generateOrderId() {
  return `ECO-${Math.floor(100000 + Math.random() * 900000)}`;
}

export default function SuccessPage() {
  const { setCartData, setAddress } = useCheckout();
  const router = useRouter();
  const orderId = generateOrderId();

  const handleContinue = () => {
    setCartData(null);
    setAddress({
      fullName: "",
      email: "",
      phone: "",
      pinCode: "",
      city: "",
      state: "",
    });
    router.push("/");
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.successWrap}>
              <div className={styles.successIcon}>🎉</div>
              <h1 className={styles.title}>Order Placed!</h1>
              <p className={styles.subtitle}>
                Thank you for choosing sustainable living. Your eco-friendly
                products are on their way!
              </p>
              <div className={styles.orderId}>Order ID: {orderId}</div>
              <div className={styles.badges}>
                <span className={styles.badge}>🌿 Planet-friendly delivery</span>
                <span className={styles.badge}>📦 Ships in 2–4 days</span>
              </div>
              <button className={styles.btnPrimary} onClick={handleContinue}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
