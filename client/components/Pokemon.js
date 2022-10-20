import React, { Component } from 'react';

// const Pokemon = () => {
//     <div>
//       <p>
//         <label htmlFor='name'></label>
//       </p>
//     </div>
// }

class Pokemon extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.data.name}</p>
                <img src = {this.props.data.sprites.front_default}/>
            </div>
        )
    }
}

export default Pokemon;

// <img src = {this.props.sprites.front_default}/>
// <p>name: {this.props.name}</p>

// <p>type: {this.props.types}</p>