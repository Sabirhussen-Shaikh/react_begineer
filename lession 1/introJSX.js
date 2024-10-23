//method 1 : used in intro folder

// method 2 : USING JS
const html = document.createElement('h1');
html.textContent = "Used vanilla js m2";
html.className = "header" // optional

document.getElementById('root').append(html);

console.log('this is method 2 : ' , html); // console : string type h1 tag
// ouput 1 : 
// this is method 2 :  <h1 class=​"header">​Used vanilla js m2​</h1>​

//method 3 : USING REACT

const element = <h1 className = "header" >This is JSX</h1>
ReactDOM.render( element , document.getElementById('root2'));

console.log('this is method 3 : ' , element); // console : object type h1 tag
//output 2 :
/*
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "className": "header",
        "children": "This is JSX"
    },
    "_owner": null,
    "_store": {}
}
*/

//  Illustration 1 :

const page = (
    <div>
        <h1 className="para" >This is Illustration no 1</h1>
        <p>This is paragraph</p>
    </div>
)
console.log(page)

ReactDOM.render(page,document.getElementById('contentPARA'));