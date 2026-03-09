import { useRouter } from "next/router";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import styles from "../styles/Success.module.css";

export default function SuccessPage() {
  const { clearAll } = useCheckout();
  const router = useRouter();

  useEffect(() => {

    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {

      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
      });

      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }

    })();

  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.ringsWrap}>
            <div className={styles.ring}></div>
            <div className={styles.ring}></div>
            <div className={styles.ring}></div>
            <div className={styles.leafIcon}>🌿</div>
          </div>

          <h1 className={styles.title}>Order Confirmed!</h1>

          <p className={styles.sub}>
            Thank you for choosing sustainable living. Your eco-friendly products are on their way!
          </p>

          <div className={styles.orderId}>
            ECO-{Math.floor(100000 + Math.random() * 900000)}
          </div>

          <div className={styles.badges}>
            <span className={styles.badge}>🌿 Planet-friendly</span>
            <span className={styles.badge}>📦 Ships in 2–4 days</span>
          </div>

          <button
            className={styles.btnContinue}
            onClick={() => {
              clearAll();
              router.push("/");
            }}
          >
            Start New Order
          </button>
        </div>
      </main>
    </>
  );
}