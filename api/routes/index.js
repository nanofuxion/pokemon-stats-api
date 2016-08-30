var express = require('express');
var router = express.Router();

var ctrPokemon = require('../controllers/pokemon.controllers.js');
var ctrMoves = require('../controllers/moves.controllers.js');
var ctrTypes = require('../controllers/types.controllers');
//noinspection JSUnresolvedFunction
router
    .route('/pokemon')
    .get(ctrPokemon.pokemonGetAll);

router
    .route('/pokemon/:pokemonId')
    .get(ctrPokemon.pokemonGetOne);

router
    .route('/moves')
    .get(ctrMoves.movesGetAll);

router
    .route('/moves/:movesId')
    .get(ctrMoves.movesGetOne);

router
    .route('/types')
    .get(ctrTypes.typesGetAll);

router
    .route('/types/:typesId')
    .get(ctrTypes.typesGetOne);

module.exports = router;
