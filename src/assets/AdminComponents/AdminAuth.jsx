import React from "react";
import { Link } from "react-router-dom";

function AdminAuth(){
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
                    <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    <a href="#"><i className="fa-solid fa-user"></i></a>
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
                Authentication
            </div>
        </div>
    </div>
        </>
    )
}

export default AdminAuth;