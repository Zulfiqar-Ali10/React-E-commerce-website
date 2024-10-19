import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";


function AdminProducts(){
    return(
        <>
        <div className="admin-head">
        <div className="admin-main">
            <div className="admin-left">
            <Link to="/admin">Admin Panel</Link>
            </div>
            <div className="admin-right">
                <div className="admin-right-1">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="admin-right-2">
                    <a href="#"><FaCartShopping /></a>
                    <a href="#"><RiAccountCircleFill />
                    </a>
                </div>

            </div>
        </div>
    </div>

    <div className="admin-bottom">
        <div className="admin-bottom-main">
            <div className="admin-bottom-left">
                <div className="admin-bottom-left-icons">
                    <a href="#" className="admin-icon"><i className="fa-solid fa-cart-shopping"></i></a>
                    <Link to="/admin" className="admin-links">Products</Link>
                </div>
                <div className="admin-bottom-left-icons">
                    <a href="#" className="admin-icon"><i className="fa-solid fa-envelope"></i></a>
                    <Link to="/order" className="admin-links">Orders</Link>
                </div>
                <div className="admin-bottom-left-icons">
                    <a href="#" className="admin-icon"><i className="fa-solid fa-house"></i></a>
                    <Link to="/Auth" className="admin-links">Authentication</Link>
                </div>
            </div>

            <div className="admin-bottom-right">
                <div className="products-section-1">
                    <div className="products-card-1">
                        <img src="public/imgs/free-photo-of-danish-pastry-with-jam-removebg-preview 1.png" alt="" />
                        <p>$40</p>
                        <div className="products-center-1">
                            <h3>Whole Grain
                                Bread</h3>
                            <a href="#">Add</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default AdminProducts;