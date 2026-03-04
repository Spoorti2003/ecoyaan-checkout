import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import mockData from "../data/mockData";
import styles from "../styles/Cart.module.css";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

// Simulates server-side data fetching (SSR)
export async function getServerSideProps() {
  // In production, replace with: const res = await fetch('https://your-api.com/cart');
  // const data = await res.json();
  const data = await Promise.resolve(mockData);
  return {
    props: { initialData: data },
  };
}

export default function CartPage({ initialData }) {
  const { cartData, setCartData } = useCheckout();
  const router = useRouter();

  useEffect(() => {
    setCartData(initialData);
  }, [initialData]);

  const data = cartData || initialData;

  const subtotal = data.cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );
  const shipping = data.shipping_fee;
  const discount = data.discount_applied;
  const grand = subtotal + shipping - discount;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Your Cart</h1>
          <p className={styles.pageSub}>Review your eco-friendly picks before checking out.</p>

          <div className={styles.layout}>
            {/* Cart Items */}
            <div className={styles.itemsCard}>
              <p className={styles.sectionLabel}>Items ({data.cartItems.length})</p>
              {data.cartItems.map((item) => (
                <CartItem key={item.product_id} item={item} />
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.summaryCard}>
                <p className={styles.sectionLabel}>Order Summary</p>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>{fmt(subtotal)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{fmt(shipping)}</span>
                </div>
                {discount > 0 && (
                  <div className={styles.summaryRow}>
                    <span>Discount</span>
                    <span className={styles.discount}>−{fmt(discount)}</span>
                  </div>
                )}
                <div className={`${styles.summaryRow} ${styles.grandTotal}`}>
                  <span>Grand Total</span>
                  <span>{fmt(grand)}</span>
                </div>
                <button
                  className={styles.btnPrimary}
                  onClick={() => router.push("/address")}
                >
                  Proceed to Checkout →
                </button>
              </div>

              <div className={styles.badges}>
                <span className={styles.badge}>🌱 Eco Certified</span>
                <span className={styles.badge}>♻️ Sustainable</span>
                <span className={styles.badge}>🔒 Secure</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
