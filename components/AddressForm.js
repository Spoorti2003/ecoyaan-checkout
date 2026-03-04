import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "../context/CheckoutContext";
import styles from "../styles/Address.module.css";

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
];

function validate(form) {
  const errors = {};

  if (!/^[A-Za-z ]+$/.test(form.fullName.trim()))
    errors.fullName = "Only letters allowed";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter valid email";

  if (!/^\d{10}$/.test(form.phone))
    errors.phone = "Phone must be 10 digits";

  if (!/^\d{6}$/.test(form.pinCode))
    errors.pinCode = "PIN must be 6 digits";

  if (!form.city.trim())
    errors.city = "City is required";

  if (!form.state)
    errors.state = "Select state";

  return errors;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  maxLength,
}) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
}

export default function AddressForm() {
  const { address, setAddress } = useCheckout();
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    pinCode: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (address) {
      setForm({
        fullName: address.fullName || "",
        email: address.email || "",
        phone: address.phone || "",
        pinCode: address.pinCode || "",
        city: address.city || "",
        state: address.state || "",
      });
    }
  }, []);

  const handleChange = (key, value) => {
    let filteredValue = value;

    // 🔒 Restrict typing

    if (key === "fullName") {
      filteredValue = value.replace(/[^A-Za-z ]/g, "");
    }

    if (key === "phone") {
      filteredValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (key === "pinCode") {
      filteredValue = value.replace(/\D/g, "").slice(0, 6);
    }

    setForm((prev) => ({
      ...prev,
      [key]: filteredValue,
    }));

    if (touched[key]) {
      const updated = { ...form, [key]: filteredValue };
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [key]: errs[key] }));
    }
  };

  const handleBlur = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [key]: errs[key] }));
  };

  const handleSubmit = () => {
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
    );
    setTouched(allTouched);

    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setAddress(form);
      router.push("/payment");
    }
  };

  return (
    <div className={styles.formCard}>
      <p className={styles.sectionLabel}>Delivery Details</p>

      <div className={styles.formGrid}>
        <div className={styles.fullWidth}>
          <Field
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            error={errors.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={form.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={form.phone}
          error={errors.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={10}
        />

        <Field
          label="PIN Code"
          name="pinCode"
          placeholder="Enter your PIN code"
          value={form.pinCode}
          error={errors.pinCode}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={6}
        />

        <Field
          label="City"
          name="city"
          placeholder="Enter your city"
          value={form.city}
          error={errors.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className={styles.fullWidth}>
          <div className={styles.formGroup}>
            <label className={styles.label}>State</label>
            <select
              value={form.state}
              onChange={(e) => handleChange("state", e.target.value)}
              onBlur={() => handleBlur("state")}
              className={`${styles.input} ${
                errors.state ? styles.inputError : ""
              }`}
            >
              <option value="">Select state…</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.state && (
              <span className={styles.errorMsg}>{errors.state}</span>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.btnPrimary}
        onClick={handleSubmit}
      >
        Continue to Payment →
      </button>
    </div>
  );
}