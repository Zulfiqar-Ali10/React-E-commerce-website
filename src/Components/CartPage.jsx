import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import SectionHeaderSec from "./SectionsHeaderSec";
import FooterSection from "./FooterSection";

function CartPage() {
    const {
        cart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        calculateTotal
    } = useContext(CartContext);

    const navigate = useNavigate();

    return (
       <>
        <SectionHeaderSec />
        
        <section className="CartPage">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p className="empty-card">Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart-details">
                                    <div>
                                       <h3>Name</h3>
                                       <h3>{item.name}</h3>
                                    </div>
                                    <div>
                                       <h3>Price</h3>
                                       <p>${item.price}</p>
                                    </div>
                                    <div className="cart-controls">
                                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Total: ${calculateTotal()}</h3>
                        <button onClick={() => navigate('/checkout')}>Checkout</button>
                    </div>
                </>
            )}
        </section>

        <FooterSection />


       </>
    );
}

export default CartPage;
