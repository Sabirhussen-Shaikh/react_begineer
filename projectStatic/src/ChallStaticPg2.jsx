import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

function Content2() {
    return (
        <>
            {/* componantbility */}
            <Header/>
            <Hero/>
            <Footer/>
            
        </>
    )
}

const chPAGE2 = createRoot(document.getElementById('root3'));

chPAGE2.render(<Content2 />)