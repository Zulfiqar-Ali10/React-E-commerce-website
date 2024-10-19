import React, { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext"; 
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SectionHeaderSec from "./SectionsHeaderSec";
import FooterSection from "./FooterSection";

const CheckoutPage = () => {
    const { cart, calculateTotal } = useContext(CartContext);
    const [loading , setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const totalAmount = calculateTotal();

        const templateParams = {
            to_name: formData.name,
            from_name: formData.name,
            from_email: formData.email,
            address: formData.address,
            phone: formData.phone,
            message: `Thank you for your order! Your total is $${totalAmount}.`
        };

        // Send email
        emailjs.send('service_rk90zr3', 'template_l5yhv55', templateParams, 'KzkHH7lY1phPShwwB')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success("Email sent successfully! Thank you for your order.");
                setLoading(false)
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    address: "",
                    phone: ""
                });
            }, (err) => {
                setLoading(false)
                console.log('FAILED...', err);
                toast.error("Error sending email. Please try again.");
            });
    };

    return (
       <>
        <SectionHeaderSec />
        
        <div className="CheckoutPage">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

                <button type="submit" disabled={loading}>{loading ? "loading..." : "Pay on Delivery"}</button>
            </form>
            <h3>Total Amount: ${calculateTotal()}</h3>
        </div>

        <FooterSection />

       </>
    );
};

export default CheckoutPage;
