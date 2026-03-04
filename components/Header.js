import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const STEPS = [
  { label: "Cart", path: "/" },
  { label: "Address", path: "/address" },
  { label: "Payment", path: "/payment" },
];

export default function Header() {
  const router = useRouter();

  const currentStep = STEPS.findIndex((s) => s.path === router.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.leaf}>🌿</span> Ecoyaan
      </div>
      <nav className={styles.progress}>
        {STEPS.map((step, i) => (
          <div key={i} className={styles.stepWrap}>
            <div
              className={`${styles.step} ${
                i === currentStep
                  ? styles.active
                  : i < currentStep
                  ? styles.done
                  : ""
              }`}
            >
              <div className={styles.dot}>
                {i < currentStep ? "✓" : i + 1}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`${styles.line} ${i < currentStep ? styles.lineDone : ""}`}
              />
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
