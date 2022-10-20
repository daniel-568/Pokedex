import React, { Component } from 'react';
import axios from 'axios';
import Pokemon from '../components/Pokemon';

// const PokemonContainer = () => {
//     const [state, setState] = useState(initialCount);
//     return(
//         <div>
//         </div>
//     )
// }

class PokemonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonUrls: [],
        }
    }

    componentDidMount() {
        for (let i = 1; i < 151; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((data) => data.json())
        .then((data) => {
            let random = this.state.pokemonUrls.slice();
            random.push(data)
            this.setState({
                pokemonUrls: random,
            })
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        }
    }

    render() {
        return (
            <div id = "pokemonFeed">
                {this.state.pokemonUrls.map((e, i) => {
                   return <Pokemon data={e} key={i}/>
                })}
            </div>
        )
    }
}

export default PokemonContainer;

// function getKantoPokemon(){
//     fetch(‘https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(res => res.json())
//     .then(dataw => console.log(data))
//   }