import { createContext, useContext, useState, useEffect } from "react";

const CheckoutContext = createContext(null);

function load(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const s = localStorage.getItem(key);
    return s ? JSON.parse(s) : fallback;
  } catch { return fallback; }
}

function save(key, val) {
  if (typeof window !== "undefined") localStorage.setItem(key, JSON.stringify(val));
}

function remove(key) {
  if (typeof window !== "undefined") localStorage.removeItem(key);
}

export function CheckoutProvider({ children }) {
  const [cartData, setCartDataState] = useState(null);
  const [contact, setContactState] = useState(null);
  const [addresses, setAddressesState] = useState([]);
  const [selectedAddressId, setSelectedAddressIdState] = useState(null);
  const [paymentMethod, setPaymentMethodState] = useState("card");

  useEffect(() => {
    const c = load("eco_cart", null);
    const ct = load("eco_contact", null);
    const a = load("eco_addresses", []);
    const sid = load("eco_selectedId", null);
    const pm = load("eco_payment", "card");
    if (c) setCartDataState(c);
    if (ct) setContactState(ct);
    if (a.length) setAddressesState(a);
    if (sid) setSelectedAddressIdState(sid);
    if (pm) setPaymentMethodState(pm);
  }, []);

  const setCartData = (d) => { setCartDataState(d); save("eco_cart", d); };
  const setContact = (d) => { setContactState(d); save("eco_contact", d); };
  const setPaymentMethod = (d) => { setPaymentMethodState(d); save("eco_payment", d); };

  const setAddresses = (d) => { setAddressesState(d); save("eco_addresses", d); };
  const setSelectedAddressId = (id) => { setSelectedAddressIdState(id); save("eco_selectedId", id); };

  const addAddress = (addr) => {
    const n = { ...addr, id: Date.now() };
    const updated = [...addresses, n];
    setAddresses(updated);
    setSelectedAddressId(n.id);
    return n;
  };

  const deleteAddress = (id) => {
    const updated = addresses.filter((a) => a.id !== id);
    setAddresses(updated);
    if (selectedAddressId === id) setSelectedAddressId(updated[0]?.id || null);
  };

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId) || null;

  const clearAll = () => {
    setCartDataState(null); setContactState(null);
    setAddressesState([]); setSelectedAddressIdState(null); setPaymentMethodState("card");
    ["eco_cart","eco_contact","eco_addresses","eco_selectedId","eco_payment"].forEach(remove);
  };

  return (
    <CheckoutContext.Provider value={{
      cartData, setCartData,
      contact, setContact,
      addresses, addAddress, deleteAddress,
      selectedAddressId, setSelectedAddressId, selectedAddress,
      paymentMethod, setPaymentMethod,
      clearAll,
    }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() { return useContext(CheckoutContext); }
