import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
export default function Checkout() {
  const stripePromise = loadStripe(
    `${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`
  );
  console.log(`${import.meta.env.STRIPE_PUBLISHABLE_KEY}`);
  const handleCheckout = async () => {
    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Test Item",
          },
          unit_amount: 500,
        },
        quantity: 5,
      },
    ];
    const { data } = await axios.post(
      import.meta.env.VITE_BASE_URL + "/api/checkout",
      { lineItems }
    );
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div>
      Checkout
      <button onClick={handleCheckout}> Al</button>
    </div>
  );
}
