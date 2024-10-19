import React from "react";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


function SectionHeaderSec() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = useNavigate();
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    console.log("Current user", user);
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <>


            <header className="Headersec">
                <div className="container">
                    <div className="header-main">
                        <div className="header-1">
                            <h4>Zulfiqar.com</h4>
                        </div>

                        <div className={`header-2 un-order-list ${menuOpen ? 'showList' : ''}`}>
                            <h4 className="h2-heading">Zulfiqar.com</h4>
                            <nav>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/Contact">Contact us</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                </ul>
                            </nav>

                            <div className="header-3 copy">
                                <a onClick={() => navigate('/cart')}><FaCartShopping /><span>{totalItems}</span></a>
                                {isAuthenticated && alert(`Thank for sign up:  ${user.name}`)}
                                {isAuthenticated ? (
                                    <button onClick={() => logout()} className='Auth-btn'>Logout</button>
                                ) : (
                                    <button onClick={() => loginWithRedirect()} className='Auth-btn'>Sign Up</button>
                                )}
                            </div>
                        </div>

                        <div className="header-3">
                            <a onClick={() => navigate('/cart')}><FaCartShopping /><span>{totalItems}</span></a>
                            {isAuthenticated && alert(`Thank for sign up:  ${user.name}`)}
                            {isAuthenticated ? (
                                <button onClick={() => logout()} className='Auth-btn'>Logout</button>
                            ) : (
                                <button onClick={() => loginWithRedirect()} className='Auth-btn'>Sign Up</button>
                            )}
                        </div>
                        <div className="header-4">
                            <a href="#" onClick={toggleMenu}>
                                {menuOpen ? <IoMdClose /> : <IoMenu />}
                            </a>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default SectionHeaderSec;