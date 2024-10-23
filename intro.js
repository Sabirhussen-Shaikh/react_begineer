// ReactDOM.render(<h1>Sabirhussen Shaikh</h1> , document.getElementById('root'));

ReactDOM.render(<ul>
    <li>dsa</li>
    <li>development</li>
</ul> , document.getElementById('root'));

function MainContent() {
    return (
        <h1> I am learning react !</h1>
    )
}

ReactDOM.render(<div>
    <MainContent/>
</div> , document.getElementById('root2'));