import React, { Component } from 'react';
import { render } from 'react-dom';

class Nav extends Component {
  render() {
    return (
        <nav>
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>Browse</li>
                <li>My Pokemon</li>
                <li>Pokemon Wishlist</li>
            </ul>
        </nav>
    )
  }
}

// const Nav = () => (
//     <nav>
//         <h1>Logo</h1>
//         <ul>
//             <li>Home</li>
//             <li>Browse</li>
//             <li>My Pokemon</li>
//             <li>Pokemon Wishlist</li>
//         </ul>
//     </nav>
// )

export default Nav;