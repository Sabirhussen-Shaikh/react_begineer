import React from 'react'

// method 1 : using JSX syntax
// const StaticPage = (
//             <div>
//                 <img src='src/assets/react.svg' />
//                 <h1>Fun facts about React</h1>
//                 <ul>
//                     <li>Was first released in 2013
//                     </li>
//                     <li>Was originally created by Jordan Walke
//                     </li>
//                     <li>Has well over 100K stars on GitHub
//                     </li>
//                     <li>Is maintained by Facebook
//                     </li>
//                     <li>Powers thousands of enterprise apps, including mobile apps</li>
//                 </ul>
//             </div>
//         )

// method 2 : using function
const StaticPage = () => {
    return (
        <div>
            <img src='src/assets/react.svg' />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013
                </li>
                <li>Was originally created by Jordan Walke
                </li>
                <li>Has well over 100K stars on GitHub
                </li>
                <li>Is maintained by Facebook
                </li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default StaticPage