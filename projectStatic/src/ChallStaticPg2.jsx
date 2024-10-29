import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"

function Header() {
    return(
        <header className="head">
                <nav className="navTag">
                    <img src="src/assets/react.svg" />
                    <ul className="navTag">
                        <li><a href="#0">Pricing</a></li>
                        <li><a href="#1">About</a></li>
                        <li><a href="#2">Contact</a></li>
                    </ul>
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
        <footer className='foot'>
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