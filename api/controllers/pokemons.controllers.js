var pokemonData = require('../data/pokemon.json');

module.exports.pokemonGetAll = function (req, res) {
    console.log('GET the pokemon');
    res
        .status(200)
        .json(pokemonData);
};

module.exports.pokemonGetOne = function (req, res) {
    //noinspection JSUnresolvedVariable
    var pokemonId = req.params.pokemonId;
    var thisPokemon = pokemonData[pokemonId - 1];

    console.log('GET one specific Pokémon');
    console.log(req.params);
        res
            .status(200)
            .json(thisPokemon)
};

// pokemonData[0].evolution.names[pokemonData[0].evolution.stage]