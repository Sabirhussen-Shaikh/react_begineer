import React from "react";
import { createRoot } from "react-dom/client";

function Header() {
    return(
        <header>
                <nav>
                    <img src="src/assets/react.svg" />
                </nav>
            </header>
    )
}

function Hero(){
    return(
        <>
            <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>javaScript then</li>
                    <li>React JS then</li>
                    <li>Next JS</li>
                </ol>
        </>
    )
}

function Footer() {
    return(
        <footer>
            © 20xx Shaikh development. All rights reserved.
        </footer>
    )
}

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