const express = require('express')
const router = express.Router()
const { getPokemon, setPokemon, updatePokemon, deletePokemon } = require('../controllers/pokemonController')

router.route('/').get(getPokemon).post(setPokemon);
// above line is equivalent to below
// router.get('/', getPokemon);
// router.post('/', setPokemon);

router.route('/:id').put(updatePokemon).delete(deletePokemon)
// above line is equivalent to below
// router.put('/:id', updatePokemon);
// router.delete('/:id', deletePokemon);

module.exports = router