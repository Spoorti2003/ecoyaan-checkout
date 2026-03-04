import { useState } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import styles from "../styles/Payment.module.css";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function PaymentPage() {
  const { cartData, address } = useCheckout();
  const router = useRouter();
  const [paying, setPaying] = useState(false);

  // Guard: if context is empty (e.g. page refreshed), redirect
  if (!cartData) {
    if (typeof window !== "undefined") router.push("/");
    return null;
  }

  const subtotal = cartData.cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );
  const grand = subtotal + cartData.shipping_fee - cartData.discount_applied;

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      router.push("/success");
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <button className={styles.btnBack} onClick={() => router.push("/address")}>
            ← Edit Address
          </button>
          <h1 className={styles.pageTitle}>Confirm & Pay</h1>
          <p className={styles.pageSub}>Review your order before making payment.</p>

          <div className={styles.layout}>
            {/* Left: Address + Items */}
            <div>
              <div className={styles.addressCard}>
                <p className={styles.sectionLabel}>Delivery Address</p>
                <div className={styles.addressBox}>
                  <p className={styles.addressName}>{address.fullName}</p>
                  <p>{address.phone} · {address.email}</p>
                  <p>{address.city}, {address.state} – {address.pinCode}</p>
                </div>
              </div>
              <OrderSummary cartData={cartData} />
            </div>

            {/* Right: Pay card */}
            <div className={styles.payCard}>
              <p className={styles.sectionLabel}>Payment</p>
              <div className={styles.amountRow}>
                <span>Amount Due</span>
                <span className={styles.amountValue}>{fmt(grand)}</span>
              </div>

              <div className={styles.payMethods}>
                <p className={styles.payMethodLabel}>Accepted Payments</p>
                <div className={styles.payIcons}>
                  <span>💳 UPI</span>
                  <span>🏦 Net Banking</span>
                  <span>💵 COD</span>
                </div>
              </div>

              <button
                className={styles.btnPay}
                onClick={handlePay}
                disabled={paying}
              >
                {paying ? (
                  <span className={styles.spinner} />
                ) : (
                  <>🔒 Pay Securely · {fmt(grand)}</>
                )}
              </button>

              <div className={styles.securityBadges}>
                <span className={styles.badge}>🔐 256-bit SSL</span>
                <span className={styles.badge}>✅ PCI Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
