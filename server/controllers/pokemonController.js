const asyncHandler = require('express-async-handler')
// async handler is not have to do try and catch

// @desc Get pokemon
// @route GET /api/pokemon
// @access Private
const getPokemon = asyncHandler(async (req, res) => {
    return res.status(200).json({message: 'Get pokemon'});
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
    return res.status(200).json({message: 'Set pokemon'});
})

// @desc Update pokemons
// @route PUT /api/pokemon/:id
// @access Private
const updatePokemon = asyncHandler(async (req, res) => {
    return res.status(200).json({message: `Update pokemon ${req.params.id}`});
})

// @desc Delete pokemon
// @route DELETE /api/pokemon/:id
// @access Private
const deletePokemon = asyncHandler(async (req, res) => {
    return res.status(200).json({message: `Delete pokemon ${req.params.id}`});
})

module.exports = {
    getPokemon,
    setPokemon,
    updatePokemon,
    deletePokemon,
}