import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthProvider.jsx";
import axios from "axios";
import getWishlist from "../hooks/getWishlist.js";
import { toast } from "react-toastify";
const WishlistContext = createContext();

// Custom hook to access the WishlistContext
export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [number, setNumber] = useState(0);

  const addProductToWishlist = async (productId) => {
    try {
      if (!user) {
        return toast.error("You Need To login", {
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

      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + "/api/wishlist",
        { productId },
        { withCredentials: true }
      );

      if (response.data.status === true) {
        setWishlist(response.data.wishlist);
        return toast.info("Product is now In Your Wishlist", {
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
      setNumber(number + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const removeProductFromWishlist = async (productId) => {
    try {
      if (!user) {
        return console.log("User not logged in.");
      }

      const response = await axios.delete(
        import.meta.env.VITE_BASE_URL + `/api/wishlist/${productId}`,
        { withCredentials: true }
      );

      if (response.data) {
        setWishlist(response.data);
        // console.log("Product removed from wishlist");
      }
      setNumber(number - 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      if (!user) {
        setWishlist([]);
        return;
      }

      const wishlistFromDb = await getWishlist();
      if (wishlistFromDb) {
        setWishlist(wishlistFromDb);
        // console.log("UpdatedList", number, wishlistFromDb);
      }
    })();
  }, [user, number]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
