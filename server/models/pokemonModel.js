const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
    name: String,
    image: String,
})

// const pokemonSchema = mongoose.Schema({
//     text: {
//         name: String,
//         required: [true, 'Please add a text value']
//     }
// }, {
//     timestamps: true,
// })

module.exports = mongoose.model('Pokemon', pokemonSchema)

/*
This code below was breaking backend

const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
    text: {
        name: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
*/