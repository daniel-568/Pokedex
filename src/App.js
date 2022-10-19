import React, { Component } from 'react';
import "App.css";
// can put import pic from './pic.jpg' (should be in src)

// Import Components
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1 className='wow'>Hello World</h1>
      </div>
    )
  }
}

// const App = () => (
//     <div>
//       <Nav />
//       <h1 className='wow'>Hello World</h1>
//     </div>
// );

export default App;