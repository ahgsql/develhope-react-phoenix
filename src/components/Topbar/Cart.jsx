import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import classes from "./cart.module.css";
import { AiOutlineClose} from "react-icons/ai";
import { useCart } from "../../context/CartProvider";
import createOrder from "../../hooks/createOrder";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";
const Cart = ({ newRef }) => {
  const { user } = useAuth();
  const { cartItems, toggleCartOpen, isCartOpen, removeProductFromCart } =
    useCart();

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const handleCheckout = async () => {
    if (!user) {
      toast.error("You Must Be Logged in To Checkout", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    const lineItems = cartItems.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productTitle + "_" + item._id,
          },

          unit_amount: item.productPrice * 100, // because stripe interprets price in cents
        },
        quantity: item.quantity,
      };
    });

    const { data } = await axios.post(
      import.meta.env.VITE_BASE_URL + "/api/checkout",
      { lineItems }
    );
    console.log(data);
    let order = await createOrder({
      basket: lineItems,
      orderId: data.id,
      userName: user ? user.userName : "testUser",
    });
    console.log(order);
    if (!order) return;
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className={classes.container} ref={newRef}>
      {isCartOpen && (
        <div className={classes.cartContainer}>
          {cartItems?.length > 0 ? (
            <>
              <h4>Your Cart </h4>
              <div className={classes.productContainer}>
                {cartItems.map((product) => (
                  <div className={classes.product} key={product._id}>
                    <img src={product.productPhotoFull} alt="" />
                    <div className={classes.productDetails}>
                      <h3>{product.productTitle}</h3>
                      <span>
                        {product.quantity} x ${product.productPrice}
                      </span>
                    </div>
                    <AiOutlineClose
                      onClick={() => removeProductFromCart(product._id)}
                    />
                  </div>
                ))}
              </div>
              <div className={classes.controls}>
                <button onClick={handleCheckout}>Checkout</button>
                <span onClick={toggleCartOpen}>Close cart</span>
              </div>
            </>
          ) : (
            <h3>No products in cart</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
