const asyncHandler = require('express-async-handler');
const { update } = require('../models/pokemonModel');
// async handler is not have to do try and catch

const Pokemon = require('../models/pokemonModel')

// @desc Get pokemon
// @route GET /api/pokemon
// @access Private
const getPokemon = asyncHandler(async (req, res) => {
    const pokemon = await Pokemon.find()
    return res.status(200).json(pokemon);
})

// @desc Set pokemon
// @route POST /api/pokemon
// @access Private
const setPokemon = asyncHandler(async (req, res) => {
    // console.log(req.body);
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const pokemon = await Pokemon.create({
        text: req.body.text,
    })

    return res.status(200).json(pokemon);
})

// @desc Update pokemons
// @route PUT /api/pokemon/:id
// @access Private
const updatePokemon = asyncHandler(async (req, res) => {
    const pokemon = await Pokemon.findById(req.params.id)

    if (!pokemon) {
        res.status(400);
        throw new Error('Pokemon not found');
    }

    const updatedPokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    return res.status(200).json(updatedPokemon);
})

// @desc Delete pokemon
// @route DELETE /api/pokemon/:id
// @access Private
const deletePokemon = asyncHandler(async (req, res) => {
    const pokemon = await Pokemon.findById(req.params.id)

    if (!pokemon) {
        res.status(400);
        throw new Error('Pokemon not found');
    }

    await pokemon.remove()

    return res.status(200).json({ id: req.params.id });
})

module.exports = {
    getPokemon,
    setPokemon,
    updatePokemon,
    deletePokemon,
}