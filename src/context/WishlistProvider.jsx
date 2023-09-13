import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthProvider.jsx";
import axios from "axios";
import {toast} from "react-toastify";

const WishlistContext = createContext();

export function useWishlist() {
    return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
    const { user } = useAuth();
    const [wishlist, setWishlist] = useState([]);
    const [number, setNumber] = useState(0);

    const addProductToWishlist = async (productId) => {
        try {
            if (!user) return;
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/wishlist`, {
                productId,
            });
            if (response.data.status) {
                toast.success(response.data.message);
                setWishlist(response.data.wishlist);
            }
            setNumber(number+1);
        } catch (error) {
            console.error("Error adding product to wishlist:", error);
        }
    };

    const removeProductFromWishlist = async (productId) => {
        try {
            if (!user) return;
            const response = await axios.delete(
                `${import.meta.env.VITE_BASE_URL}/api/wishlist/${productId}`
            );
            if (response.data) {
                toast.success("Product removed from wishlist");
                setWishlist(response.data);
            }
            setNumber(number-1);
        } catch (error) {
            console.error("Error removing product from wishlist:", error);
        }
    };

    useEffect(() => {
        if (user) {
            const fetchWishlist = async () => {
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_BASE_URL}/api/wishlist`
                    );
                    if (response.data.success) {
                        setWishlist(response.data.wishlist);
                    }
                } catch (error) {
                    console.error("Error fetching wishlist:", error);
                }
            };
            fetchWishlist();
        } else {
            setWishlist([]);
        }
    }, [user,number]);
    return (
        <WishlistContext.Provider value={{wishlist, addProductToWishlist, removeProductFromWishlist,}}>
            {children}
        </WishlistContext.Provider>
    );
}
