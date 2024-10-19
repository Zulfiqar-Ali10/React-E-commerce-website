import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";


function ProductsSection() {
    const { addToCart } = useContext(CartContext);

    const products = [
        {
            id: 1,
            image: "src/imgs/free-photo-of-danish-pastry-with-jam-removebg-preview 1.png",
            price: 40,
            name: "Whole Grain Bread"
        },
        {
            id: 2,
            image: "src/imgs/photo2.png",
            price: 50,
            name: "Whole Boule Bread"
        },
        {
            id: 3,
            image: "src/imgs/photo4.png",
            price: 60,
            name: "Whole Baguette"
        },
        {
            id: 4,
            image: "src/imgs/p4.png",
            price: 30,
            name: "Whole Batard Bread"
        },
        {
            id: 5,
            image: "src/imgs/p5.png",
            price: 70,
            name: "Whole Focaccia Bread"
        },
        {
            id: 6,
            image: "src/imgs/p6.png",
            price: 90,
            name: "Whole Lavesh Bread"
        }
    ];

    return (
        <>
            <section className="Products">
                <div className="container">
                    <div className="products-main">
                        <div className="products-section">
                            {products.map((product) => (
                                <div key={product.id} className="products-card">
                                    <img src={product.image} alt={product.name} />
                                    <p>$ {product.price}</p>
                                    <div className="products-center">
                                        <h3>{product.name}</h3>
                                        <a onClick={() => addToCart(product)}>Add</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductsSection;
