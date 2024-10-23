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

// using vanilla javasrcipt to creating same output as ReactDOM.render() 

// method 1
// const html = `<h1 class="header"> used vanilla js m1</h1>`;
// const displayHTML = document.getElementById('root3');

// displayHTML.innerHTML = html; //but innerHTML is also advance html tag

// method 2
// const html = document.createElement('h1');
// html.textContent = "used vanilla js m2";
// html.className = "header" // optional

// document.getElementById('root3').append(html);

//method 3 : using react
ReactDOM.render(<h1 className = "header" >used vanilla js m3</h1> , document.getElementById('root3'));