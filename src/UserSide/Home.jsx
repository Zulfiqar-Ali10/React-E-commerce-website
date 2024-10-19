import React from "react";
import MainHeaderSection from "../Components/MainHeaderSection";
import ProductsSection from "../Components/ProductsSection";
import BlogSection from "../Components/BlogSection";
import ExploreSection from "../Components/ExploreSection";
import AboutSection from "../Components/AboutSection";
import FooterSection from "../Components/FooterSection";

function Home(){
    return(
        <>
        <MainHeaderSection />
        <ProductsSection />
        <BlogSection />
        <ExploreSection />
        <AboutSection />
        <FooterSection />
        </>
    )

}
 
export default Home;