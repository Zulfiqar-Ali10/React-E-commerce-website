import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

// Create the CartContext
export const CartContext = createContext();

// Create a CartProvider to wrap the application and provide cart state
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // Increase quantity if the product is already in the cart
                toast.success(`${product.name} quantity increased in cart!`);
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Add new product to the cart
                toast.success(`${product.name} added to cart!`); 
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Increment product quantity
    const incrementQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrement product quantity
    const decrementQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Remove product from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Calculate total amount
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                incrementQuantity,
                decrementQuantity,
                removeFromCart,
                calculateTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
