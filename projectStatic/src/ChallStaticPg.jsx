import React from "react";
import { createRoot } from "react-dom/client";

function Content() {
    return(
        <>
            <h1>First Challenge</h1>
            <ol>
                <li>javaScript then</li>
                <li>React JS then</li>
                <li>Next JS</li>
            </ol>
        </>
    )
}

const chPAGE = createRoot(document.getElementById('root2'));

chPAGE.render(
    <Content/>
)