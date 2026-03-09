import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import mockData from "../data/mockData";
import styles from "../styles/Cart.module.css";

export async function getServerSideProps() {
  const data = await Promise.resolve(mockData);
  return { props: { initialData: data } };
}

export default function ContactPage({ initialData }) {
  const { cartData, setCartData, contact, setContact } = useCheckout();
  const router = useRouter();
  const [form, setForm] = useState({ email: contact?.email || "", phone: contact?.phone || "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => { if (!cartData) setCartData(initialData); }, [initialData]);

  const validate = (f) => {
    const e = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address";
    if (f.phone && !/^\d{10}$/.test(f.phone)) e.phone = "Phone must be 10 digits";
    return e;
  };

  const handleChange = (key, value) => {
    let v = value;
    if (key === "phone") v = value.replace(/\D/g, "").slice(0, 10);
    setForm((p) => ({ ...p, [key]: v }));
    if (touched[key]) setErrors((p) => ({ ...p, [key]: validate({ ...form, [key]: v })[key] }));
  };

  const handleBlur = (key) => {
    setTouched((p) => ({ ...p, [key]: true }));
    setErrors((p) => ({ ...p, [key]: validate(form)[key] }));
  };

  const handleNext = () => {
    setTouched({ email: true, phone: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) { setContact(form); router.push("/address"); }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            <div className={styles.stepChip}>Step 1 of 4</div>
            <h1 className={styles.pageTitle}>Contact Information</h1>
            <p className={styles.pageSub}>We'll use this to send you order updates &amp; delivery alerts.</p>
          </div>

          <div className={styles.formCard}>
            <div className={styles.formGroup}>
              <label className={styles.label}>✉ Email Address</label>
              <div className={styles.inputWrap}>
                <input type="email" className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  placeholder="you@example.com" value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")} />
              </div>
              {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                📞 Phone Number  
              </label>
              <div className={styles.inputWrap}>
                <input type="tel" className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                  placeholder="9876543210" value={form.phone} maxLength={10}
                  onChange={(e) => handleChange("phone", e.target.value)} onBlur={() => handleBlur("phone")} />
              </div>
              {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
            </div>
          </div>
        </div>

        <div className={styles.stickyBar}>
          <div className={styles.stickyInner}>
            <button className={styles.btnBack}>← Back</button>
             <button className={styles.btnNext} onClick={handleNext}>Next Step →</button>
          </div>
        </div>
      </main>
    </>
  );
}
