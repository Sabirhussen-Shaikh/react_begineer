import React from "react";
import { createRoot } from "react-dom/client";

function Content2() {
    return (
        <>
            <header>
                <nav>
                    <img src="src/assets/react.svg" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>javaScript then</li>
                <li>React JS then</li>
                <li>Next JS</li>
            </ol>
            <footer>© 20xx Shaikh development. All rights reserved.</footer>
        </>
    )
}

const chPAGE2 = createRoot(document.getElementById('root3'));

chPAGE2.render(<Content2 />)