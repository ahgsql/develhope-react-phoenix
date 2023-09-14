import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { toast } from "react-toastify";

// Create a CartContext
const CartContext = createContext();

// Custom hook to access the CartContext
export function useCart() {
  return useContext(CartContext);
}

// CartProvider component
export function CartProvider({ children }) {
  let check = localStorage.getItem("cartItems");
  let cartItemsState;
  if (check == null || undefined) {
    // In first place we need to create
    localStorage.setItem("cartItems", JSON.stringify([]));
    cartItemsState = [];
  } else {
    let cartItemsFromLocal = localStorage.getItem("cartItems");
    cartItemsState = JSON.parse(cartItemsFromLocal);
  }

  const [cartItems, setCartItems] = useState(cartItemsState);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart items from localStorage on component mount

  // Function to add a product to the cart
  const addProductToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      // If it's already in the cart, increment the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.success("Product Quantity Incremented", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // If it's not in the cart, add it with a quantity of 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
      toast.success("Product added to Cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const isProductInCart = (id) => {
    return cartItems.some((i) => i._id == id);
  };
  const emptyCart = () => {
    setCartItems([]);
  };

  // Function to remove a product from the cart
  const removeProductFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  // Function to toggle the cart's open/close state
  const toggleCartOpen = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  // Update localStorage whenever cartItems change
  useEffect(() => {
    // console.log(cartItems, "savings");
    localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addProductToCart,
        removeProductFromCart,
        toggleCartOpen,
        emptyCart,
        isProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
