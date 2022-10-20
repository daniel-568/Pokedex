import React, { Component } from 'react';
import { render } from 'react-dom';

const Nav = () => (
    <nav className = 'nav'>
        <div id='navButtons'>
            <button className='buttons'>Home</button>
            <button className='buttons'>My Pokemon</button>
        </div>
    </nav>
)

export default Nav;

// class Nav extends Component {
//   render() {
//     return (
//         <nav>
//             <h1>Logo</h1>
//             <ul>
//                 <li>Home</li>
//                 <li>Browse</li>
//                 <li>My Pokemon</li>
//                 <li>Pokemon Wishlist</li>
//             </ul>
//         </nav>
//     )
//   }
// }