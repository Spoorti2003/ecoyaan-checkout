import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const STEPS = [
  { label: "Contact", path: "/" },
  { label: "Shipping", path: "/address" },
  { label: "Payment", path: "/payment" },
  { label: "Review", path: "/review" },
];

export default function Header() {
  const router = useRouter();
  const currentStep = STEPS.findIndex((s) => s.path === router.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🌿</span>
        <span className={styles.logoText}>ecoyaan</span>
      </div>
      <nav className={styles.progress}>
        {STEPS.map((step, i) => (
          <div key={i} className={styles.stepWrap}>
            <div className={`${styles.step} ${i === currentStep ? styles.active : i < currentStep ? styles.done : ""}`}>
              <div className={styles.dot}>
                {i < currentStep ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : i + 1}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`${styles.line} ${i < currentStep ? styles.lineDone : ""}`} />
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
