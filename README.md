📁 Project Structure

ecoyaan-checkout/
├── pages/
│ ├── \_app.js # App entry — wraps all pages with CheckoutProvider
│ ├── index.js # Screen 1: Cart / Order Summary (SSR via getServerSideProps)
│ ├── address.js # Screen 2: Shipping Address Form
│ ├── payment.js # Screen 3: Payment Confirmation
│ └── success.js # Screen 4: Order Success
├── components/
│ ├── Header.js # Sticky header with step progress indicator
│ ├── CartItem.js # Individual cart item card
│ ├── AddressForm.js # Controlled form with input filtering + validation
│ └── OrderSummary.js # Reusable order summary with totals
├── context/
│ └── CheckoutContext.js # Global state: cart data + address
├── styles/
│ ├── globals.css # CSS variables, resets, base styles
│ ├── Header.module.css
│ ├── Cart.module.css
│ ├── Address.module.css
│ ├── Payment.module.css
│ └── Success.module.css
├── data/
│ └── mockData.js # Mock JSON data (simulates API response)
└── next.config.js

## 🚀 How to Run Locally

Prerequisites: Node.js 18+ installed

# 1. Clone the repository

git clone https://github.com/Spoorti2003/ecoyaan-checkout.git
cd ecoyaan-checkout

# 2. Install dependencies

npm install

# 3. Start the development server

npm run dev

# 4. Open in browser

http://localhost:3000

## 🛠️ Tech Stack

| Layer            | Choice                      |
| ---------------- | --------------------------- |
| Framework        | Next.js 14 (Pages Router)   |
| Language         | JavaScript (ES6+)           |
| Styling          | CSS Modules + CSS Variables |
| State Management | React Context API           |
| Data Fetching    | `getServerSideProps` (SSR)  |
| Deployment       | Vercel                      |


## ✅ Checkout Flow

```
/ (Cart)  →  /address  →  /payment  →  /success
```

1. **Cart** — Loads products via SSR, shows subtotal + shipping + grand total
2. **Address** — Form with input filtering and live validation (email, 10-digit phone, 6-digit PIN, required fields). Navigating back pre-fills previously entered data
3. **Payment** — Final order + address review, animated Pay button with 2s simulated processing
4. **Success** — Order confirmation with generated Order ID

---
