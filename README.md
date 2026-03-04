🌿 Ecoyaan Checkout Flow

A simple multi-step checkout flow built with Next.js.
This project simulates a real ecommerce checkout process — from cart to order success.

🔗 Live Demo

https://ecoyaan-checkout.vercel.app

📁 Project Structure
ecoyaan-checkout/
├── pages/
│ ├── \_app.js
│ ├── index.js
│ ├── address.js
│ ├── payment.js
│ └── success.js
├── components/
├── context/
├── styles/
├── data/
└── next.config.js

🚀 Running the Project Locally

Prerequisite: Node.js 18+

git clone https://github.com/Spoorti2003/ecoyaan-checkout.git
cd ecoyaan-checkout
npm install
npm run dev

Open:
http://localhost:3000

🛠️ Tech Stack

Next.js 14 (Pages Router)

JavaScript (ES6+)

CSS Modules

React Context API

Server-side rendering (getServerSideProps)

Deployed on Vercel

No external UI libraries were used — all styling is written manually using CSS Modules.

🏗️ Architecture & Decisions
Server-Side Rendering for Cart

The cart page (pages/index.js) uses getServerSideProps to fetch mock cart data before rendering.

This mimics how real ecommerce platforms fetch cart details from an API on the server side.

export async function getServerSideProps() {
const data = await Promise.resolve(mockData);
return { props: { initialData: data } };
}

In a real-world scenario, this can easily be replaced with a fetch() call to a backend service.

Global State with Context API

I used the React Context API to store:

Cart data

Shipping address

This keeps the checkout flow simple without introducing Redux or other state libraries, which would be unnecessary for this scale.

The state persists across all pages in the flow.

Form Handling & Validation

The Address page includes:

Input filtering (blocks invalid characters while typing)

Field-level validation on blur

Full validation on submit

For example:

Full name → only letters and spaces allowed

Phone → digits only, capped at 10

PIN → digits only, capped at 6

The Field component is defined outside AddressForm intentionally.
When it was inside, React would re-create the component on every render, causing input focus to reset. Moving it outside fixed that issue.

If the user navigates back to the address page, previously entered data is restored from context.

Reusable Components

CartItem is reused across cart and payment screens.

OrderSummary is shared between payment and success pages.

Header reads the current route and highlights the active step automatically.

The goal was to keep components small and reusable instead of tightly coupling them to pages.

📱 Responsive Design

Desktop: two-column layout (items + summary sidebar)

Mobile: stacked layout

Breakpoint at 720px

Touch-friendly buttons and inputs

✅ Checkout Flow
/ → /address → /payment → /success

Cart — Displays items and totals (SSR)

Address — Shipping form with filtering + validation

Payment — Order review + simulated processing

Success — Confirmation with generated Order ID

🎯 Final Result

The focus of this project was:

Clean architecture

Proper form handling

Reusable components

Realistic checkout behavior
