import React, { Component } from 'react';
// import axios from 'axios';

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
            <div className='pokemon'>
                <p>{(this.props.data.name).toUpperCase()}</p>
                <p>Types: {this.props.types}</p>
                <img src = {this.props.data.sprites.front_default}/>
                <button className='buttons' onClick = {(e) => {
                    axios.put('http://localhost:8080/api/pokemon', this.props.data.id);
                }}>Add to My Pokemon</button>
            </div>
        )
    }
}

// style={styles.container} 
// const styles = {
//     container: {
//       border: '1px solid black',
//       height: 150,
//       width: '20%',
//       flex: 1
//     },
//   };

export default Pokemon;

// <img src = {this.props.sprites.front_default}/>
// <p>name: {this.props.name}</p>
// <p>type: {this.props.types}</p>