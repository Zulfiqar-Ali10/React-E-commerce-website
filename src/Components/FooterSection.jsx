import React, { useEffect, useState } from 'react';

function FooterSection(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show or hide the button depending on scroll position
        const toggleVisibility = () => {
            if (window.pageYOffset > 3000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



    return(
        <>
        
        <footer>
            <div className="container">
                <div className="footer-main">

                    <div className="footer-top">
                        <div className="footer-top-left">
                            <h2>Zulfiqar.com</h2>
                        </div>
                        <div className="footer-top-right">
                            <p>Follow us</p>
                            <div>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-main">
                            <div className="footer-bottom-1">
                                <h2>About Us</h2>
                                <a href="#">(456) 789-12301</a>
                                <a href="#">info@modrino.co.uk</a>
                                <a href="#">South 13th street</a>
                                <a href="#">New york America</a>
                            </div>
                            <div className="footer-bottom-2">
                                <h2>Explore</h2>
                                <nav>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                        <li><a href="products.html">Services</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="footer-bottom-3">
                                <h2>Recent News</h2>
                                <div className="footer-bottom-3-center">
                                    <div className="footer-bottom-3-left">
                                        <img src="src/imgs/Rectangle 157.png" alt=""/>
                                    </div>
                                    <div className="footer-bottom-3-right">
                                        <p>June 14,2024</p>
                                        <h4>Puff pastry bliss.</h4>
                                    </div>
                                </div>
                                <div className="footer-bottom-3-center">
                                    <div className="footer-bottom-3-left">
                                        <img src="src/imgs/Rectangle 158.png" alt=""/>
                                    </div>
                                    <div className="footer-bottom-3-right">
                                        <p>June 14,2024</p>
                                        <h4>Puff pastry bliss.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={scrollToTop}
            style={{
                display: isVisible ? 'block' : 'none',
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                padding: '10px 20px',
                backgroundColor: '#933C24',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                zIndex: 1000,
            }} id='scroll-btn'>Scroll to Top</button>
                    {/* <button id="scroll-to-top-btn" onClick={scrollToTop}>Scroll-To-Top</button> */}

                    <div className="footer-end">
                        <a href="#">© 2024 Bake House. All rights reserved</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default FooterSection;