import styles from "../styles/Payment.module.css";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function OrderSummary({ cartData }) {
  if (!cartData) return null;

  const subtotal = cartData.cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );
  const shipping = cartData.shipping_fee;
  const discount = cartData.discount_applied;
  const grand = subtotal + shipping - discount;

  return (
    <div className={styles.summaryCard}>
      <p className={styles.sectionLabel}>Order Summary</p>

      {cartData.cartItems.map((item) => (
        <div key={item.product_id} className={styles.summaryItem}>
          <img src={item.image} alt={item.product_name} className={styles.summaryImg} />
          <div className={styles.summaryInfo}>
            <p className={styles.summaryName}>{item.product_name}</p>
            <span className={styles.summaryQty}>Qty: {item.quantity}</span>
          </div>
          <span className={styles.summaryPrice}>
            {fmt(item.product_price * item.quantity)}
          </span>
        </div>
      ))}

      <div className={styles.totals}>
        <div className={styles.totalRow}>
          <span>Subtotal</span>
          <span>{fmt(subtotal)}</span>
        </div>
        <div className={styles.totalRow}>
          <span>Shipping</span>
          <span>{fmt(shipping)}</span>
        </div>
        {discount > 0 && (
          <div className={styles.totalRow}>
            <span>Discount</span>
            <span className={styles.discount}>−{fmt(discount)}</span>
          </div>
        )}
        <div className={`${styles.totalRow} ${styles.grandTotal}`}>
          <span>Grand Total</span>
          <span>{fmt(grand)}</span>
        </div>
      </div>
    </div>
  );
}
