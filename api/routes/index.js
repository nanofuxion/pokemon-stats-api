var express = require('express');
var router = express.Router();

var ctrPokemon = require('../controllers/pokemons.controllers.js');

//noinspection JSUnresolvedFunction
router
    .route('/pokemon')
    .get(ctrPokemon.pokemonGetAll);

router
    .route('/pokemon/:pokemonId')
    .get(ctrPokemon.pokemonGetOne);

module.exports = router;
