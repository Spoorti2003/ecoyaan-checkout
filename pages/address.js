import { useRouter } from "next/router";
import Header from "../components/Header";
import AddressForm from "../components/AddressForm";
import styles from "../styles/Address.module.css";

export default function AddressPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <button className={styles.btnBack} onClick={() => router.push("/")}>
            ← Back to Cart
          </button>
          <h1 className={styles.pageTitle}>Shipping Address</h1>
          <p className={styles.pageSub}>Where should we deliver your order?</p>
          <AddressForm />
        </div>
      </main>
    </>
  );
}
