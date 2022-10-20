const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    username: String,
    password: String,
    pokemonCollection: [],
})

module.exports = mongoose.model('Profile', profileSchema)