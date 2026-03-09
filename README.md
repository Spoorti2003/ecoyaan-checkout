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

## 🏗️ Architectural Choices

### 1. Next.js Pages Router with SSR

Used `getServerSideProps` on the Cart page (`pages/index.js`) to fetch mock data server-side before the page renders. This simulates a real-world scenario where cart data is fetched from an API on the server, improving initial load performance and SEO.

```js
export async function getServerSideProps() {
  const data = await Promise.resolve(mockData); // replace with real API fetch
  return { props: { initialData: data } };
}
```

### 2. Context API for Global State

`CheckoutContext` holds two pieces of shared state — `cartData` and `address` — that persist across all pages without prop drilling. This is appropriate for a small-to-medium checkout flow where Redux would be overkill.

### 3. CSS Modules for Scoped Styling

Each component/page has its own `.module.css` file. This avoids class name collisions, keeps styles co-located with their component, and requires zero configuration beyond what Next.js provides out of the box.

### 4. Form Validation & Input Filtering

Validation runs on `onBlur` per field to avoid noisy errors while typing. On submit, all fields are validated at once. Errors are stored in a separate `errors` state object keyed by field name.

## ✅ Checkout Flow

```
/ (Cart)  →  /address  →  /payment  →  /success
```

1. **Cart** — Loads products via SSR, shows subtotal + shipping + grand total
2. **Address** — Form with input filtering and live validation (email, 10-digit phone, 6-digit PIN, required fields). Navigating back pre-fills previously entered data
3. **Payment** — Final order + address review, animated Pay button with 2s simulated processing
4. **Success** — Order confirmation with generated Order ID

---
