import { useState } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import styles from "../styles/Review.module.css";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;
const METHOD_LABELS = { card: "Credit / Debit Card", upi: "UPI", cod: "Cash on Delivery" };

export default function ReviewPage() {
  const { cartData, contact, selectedAddress, paymentMethod } = useCheckout();
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  if (!cartData) { if (typeof window !== "undefined") router.push("/"); return null; }

  const subtotal = cartData.cartItems.reduce((s, i) => s + i.product_price * i.quantity, 0);
  const grand = subtotal + cartData.shipping_fee - (cartData.discount_applied || 0);

  const handleConfirm = () => { setConfirming(true); setTimeout(() => router.push("/success"), 1800); };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            <div className={styles.stepChip}>Step 4 of 4</div>
            {/* <div className={styles.reviewIcon}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(45,186,114,0.12)"/>
                <circle cx="24" cy="24" r="16" fill="rgba(45,186,114,0.2)"/>
                <path d="M14 24.5L20 30.5L34 16" stroke="#2dba72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div> */}
            <h1 className={styles.pageTitle}>Review Your Order</h1>
            <p className={styles.pageSub}>Double-check everything before confirming.</p>
          </div>

          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryCardTitle}><span className={styles.cardIcon}>✉️</span> Contact</div>
              <div className={styles.summaryCardBody}><p>{contact?.email}</p>{contact?.phone && <p>{contact.phone}</p>}</div>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryCardTitle}><span className={styles.cardIcon}>📍</span> Shipping</div>
              <div className={styles.summaryCardBody}>
                {selectedAddress ? (<><p>{selectedAddress.fullName}</p><p>{selectedAddress.addressLine1}</p><p>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.pinCode}</p></>) : <p className={styles.missing}>No address selected</p>}
              </div>
            </div>
          </div>

          <div className={styles.summaryCard} style={{ marginTop: 14 }}>
            <div className={styles.summaryCardTitle}><span className={styles.cardIcon}>💳</span> Payment Method</div>
            <div className={styles.summaryCardBody}><p>{METHOD_LABELS[paymentMethod] || "Card"}</p></div>
          </div>

          <div className={styles.summaryCard} style={{ marginTop: 14 }}>
            <div className={styles.summaryCardTitle}><span className={styles.cardIcon}>🛍️</span> Order Items</div>
            <div className={styles.itemsList}>
              {cartData.cartItems.map((item) => (
                <div key={item.product_id} className={styles.orderItem}>
                  <img src={item.image} alt={item.product_name} className={styles.itemImg} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.product_name}</p>
                    <p className={styles.itemQty}>Qty: {item.quantity}</p>
                  </div>
                  <p className={styles.itemPrice}>{fmt(item.product_price * item.quantity)}</p>
                </div>
              ))}
              <div className={styles.totalRow}><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
              <div className={styles.totalRow}><span>Shipping</span><span>{fmt(cartData.shipping_fee)}</span></div>
              <div className={`${styles.totalRow} ${styles.grandRow}`}><span>Total</span><span>{fmt(grand)}</span></div>
            </div>
          </div>
        </div>

        <div className={styles.stickyBar}>
          <div className={styles.stickyInner}>
            <button className={styles.btnBack} onClick={() => router.push("/payment")}>← Back</button>
             <button className={styles.btnConfirm} onClick={handleConfirm} disabled={confirming}>
              {confirming ? <span className={styles.spinner}/> : <>Confirm Order ✓</>}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
