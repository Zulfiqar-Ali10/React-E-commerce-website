import React from "react";

function ExploreSection(){
    return(
        <>
         <section className="Explore">
            <div className="container">
                <div className="Explore-main">
                    <h2>Explore More</h2>
                    <div className="explore-nav">
                        <nav>
                            <ul>
                                <li><a href="#" className="cake">Cake</a></li>
                                <li><a href="#">Muffins</a></li>
                                <li><a href="#">Croissant</a></li>
                                <li><a href="#">Bread</a></li>
                                <li><a href="#">Tart</a></li>
                                <li><a href="#">Favorite</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="explore-imgs">
                        <div className="parent-explore"> <img src="/imgs/img1.png" alt=""/></div>
                        <div className="parent-explore"> <img src="/imgs/img2.png" alt=""/></div>
                        <div className="parent-explore"><img src="/imgs/img3.png" alt=""/></div>
                    </div>
                    <div className="explore-imgs">
                        <div className="parent-explore"> <img src="/imgs/img4.png" alt=""/></div>
                        <div className="parent-explore"> <img src="/imgs/img5.png" alt=""/></div>
                        <div className="parent-explore"><img src="/imgs/img6.png" alt=""/></div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default ExploreSection;