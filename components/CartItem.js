import styles from "../styles/Cart.module.css";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function CartItem({ item, index }) {
  return (
    <div className={styles.cartItem} style={{ animationDelay: `${index * 0.1}s` }}>
      <img src={item.image} alt={item.product_name} className={styles.itemImg} />
      <div className={styles.itemInfo}>
        <p className={styles.itemName}>{item.product_name}</p>
        <span className={styles.itemQty}>Qty: {item.quantity}</span>
      </div>
      <div className={styles.itemPrice}>{fmt(item.product_price * item.quantity)}</div>
    </div>
  );
}
