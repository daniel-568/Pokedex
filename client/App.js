import React, { Component } from 'react';
import "./App.css";
import MainContainer from './containers/MainContainer'

// can put import pic from './pic.jpg' (should be in src)

// // Import Components
// import Nav from './Nav';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <h1 className='wow'>Hello World</h1>
//       </div>
//     )
//   }
// }

const App = () => (
    <div className='app'>
      <img id='logo' src='https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png' />
      <MainContainer />
    </div>
);

export default App;

// <h1 className='wow'>Hello World</h1>

// <link type='image' href='./assets/Pokemon-Logo.png'/>

// <link type='image' type='image' href='./assets/Pokemon-Logo.png'/>

// <img src = './assets/Pokemon-Logo.png'/>

// <link rel="stylesheet" type="text/css" href="styles.css" />