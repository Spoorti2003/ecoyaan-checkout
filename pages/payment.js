import { useState } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import styles from "../styles/Payment.module.css";

const METHODS = [
  { id: "card", icon: "💳", label: "Credit Card", desc: "Pay securely with Visa, Mastercard, etc." },
  { id: "upi", icon: "📱", label: "UPI", desc: "Pay via GPay, PhonePe, Paytm, etc." },
  { id: "cod", icon: "💵", label: "Cash on Delivery", desc: "Pay when your order arrives." },
];

export default function PaymentPage() {
  const { paymentMethod, setPaymentMethod } = useCheckout();
  const router = useRouter();
  const [selected, setSelected] = useState(paymentMethod || "card");

  const handleNext = () => {
    setPaymentMethod(selected);
    router.push("/review");
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Payment Method</h1>
          <p className={styles.pageSub}>All transactions are secure and encrypted.</p>

          <div className={styles.methodList}>
            {METHODS.map((m) => (
              <div
                key={m.id}
                className={`${styles.methodCard} ${selected === m.id ? styles.methodSelected : ""}`}
                onClick={() => setSelected(m.id)}
              >
                <div className={styles.methodLeft}>
                  <span className={styles.methodIcon}>{m.icon}</span>
                  <div>
                    <div className={styles.methodLabel}>{m.label}</div>
                    <div className={styles.methodDesc}>{m.desc}</div>
                  </div>
                </div>
                <div className={`${styles.radio} ${selected === m.id ? styles.radioSelected : ""}`}>
                  {selected === m.id && <div className={styles.radioDot} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stickyBar}>
          <div className={styles.stickyInner}>
            <button className={styles.btnBack} onClick={() => router.push("/address")}>← Back</button>
             <button className={styles.btnNext} onClick={handleNext}>Next Step →</button>
          </div>
        </div>
      </main>
    </>
  );
}
