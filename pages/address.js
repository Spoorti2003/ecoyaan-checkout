import { useState } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import Header from "../components/Header";
import styles from "../styles/Address.module.css";

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
];

const emptyForm = { fullName:"", addressLine1:"", addressLine2:"", city:"", state:"", pinCode:"" };

function validate(f) {
  const e = {};
  if (!f.fullName.trim()) e.fullName = "Full name is required";
  if (!f.addressLine1.trim()) e.addressLine1 = "Address is required";
  if (!f.city.trim()) e.city = "City is required";
  if (!f.state) e.state = "Select a state";
  if (!/^\d{6}$/.test(f.pinCode)) e.pinCode = "Enter valid 6-digit PIN";
  return e;
}

function Field({ label, name, placeholder, value, error, onChange, onBlur, optional }) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}{optional && <span className={styles.optional}> (optional)</span>}</label>
      <input
        type="text"
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
}

export default function AddressPage() {
  const { addresses, addAddress, deleteAddress, selectedAddressId, setSelectedAddressId } = useCheckout();
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (key, value) => {
    let v = value;
    if (key === "pinCode") v = value.replace(/\D/g, "").slice(0, 6);
    setForm((p) => ({ ...p, [key]: v }));
    if (touched[key]) {
      const errs = validate({ ...form, [key]: v });
      setErrors((p) => ({ ...p, [key]: errs[key] }));
    }
  };

  const handleBlur = (key) => {
    setTouched((p) => ({ ...p, [key]: true }));
    setErrors((p) => ({ ...p, [key]: validate(form)[key] }));
  };

  const handleSave = () => {
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true]));
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      addAddress(form);
      setForm(emptyForm);
      setTouched({});
      setErrors({});
      setShowModal(false);
    }
  };

  const handleNext = () => {
    if (selectedAddressId) router.push("/payment");
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Shipping Address</h1>
          <p className={styles.pageSub}>Where should we send your eco-friendly goodies?</p>
           <div className={styles.addressGrid}>
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className={`${styles.addrCard} ${selectedAddressId === addr.id ? styles.addrCardSelected : ""}`}
                onClick={() => setSelectedAddressId(addr.id)}
              >
                {selectedAddressId === addr.id && (
                  <div className={styles.checkBadge}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                <div className={styles.addrIcon}>📍</div>
                <div className={styles.addrName}>{addr.fullName}</div>
                <div className={styles.addrText}>{addr.addressLine1}</div>
                <div className={styles.addrText}>{addr.city}, {addr.state} {addr.pinCode}</div>
                <button className={styles.btnRemove} onClick={(e) => { e.stopPropagation(); deleteAddress(addr.id); }}>✕</button>
              </div>
            ))}

            <div className={styles.addrCardNew} onClick={() => setShowModal(true)}>
              <div className={styles.plusIcon}>+</div>
              <div className={styles.addNewText}>Add New Address</div>
            </div>
          </div>
        </div>

        <div className={styles.stickyBar}>
          <div className={styles.stickyInner}>
            <button className={styles.btnBack} onClick={() => router.push("/")}>← Back</button>
             <button className={styles.btnNext} onClick={handleNext} disabled={!selectedAddressId}>Next Step →</button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>New Address</h2>
              <button className={styles.modalClose} onClick={() => setShowModal(false)}>✕</button>
            </div>
            <p className={styles.modalSub}>Enter your shipping details below.</p>

            <div className={styles.modalBody}>
              <Field label="Full Name" name="fullName" placeholder="Samarth Patil"
                value={form.fullName} error={errors.fullName} onChange={handleChange} onBlur={handleBlur} />
              <Field label="Address Line 1" name="addressLine1" placeholder="123 Main St"
                value={form.addressLine1} error={errors.addressLine1} onChange={handleChange} onBlur={handleBlur} />
              <Field label="Apartment, suite, etc." name="addressLine2" placeholder=""
                value={form.addressLine2} error={errors.addressLine2} onChange={handleChange} onBlur={handleBlur} optional />

              <div className={styles.twoCol}>
                <Field label="City" name="city" placeholder="Bangalore"
                  value={form.city} error={errors.city} onChange={handleChange} onBlur={handleBlur} />
                <div className={styles.formGroup}>
                  <label className={styles.label}>State</label>
                  <select value={form.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    onBlur={() => handleBlur("state")}
                    className={`${styles.input} ${errors.state ? styles.inputError : ""}`}>
                    <option value="">Select…</option>
                    {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <span className={styles.errorMsg}>{errors.state}</span>}
                </div>
              </div>

              <div className={styles.twoCol}>
                <Field label="ZIP Code" name="pinCode" placeholder="560001"
                  value={form.pinCode} error={errors.pinCode} onChange={handleChange} onBlur={handleBlur} />
                <div className={styles.formGroup}>
                  <label className={styles.label}>Country</label>
                  <input className={styles.input} value="India" readOnly style={{background:'var(--gray-100)',color:'var(--gray-500)'}} />
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.btnSave} onClick={handleSave}>Save Address</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
