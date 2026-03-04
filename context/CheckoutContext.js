import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext(null);

export function CheckoutProvider({ children }) {
  const [cartData, setCartData] = useState(null);
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    pinCode: "",
    city: "",
    state: "",
  });

  return (
    <CheckoutContext.Provider
      value={{ cartData, setCartData, address, setAddress }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return useContext(CheckoutContext);
}
