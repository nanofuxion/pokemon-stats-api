var movesData = require('../data/moves.json');

module.exports.movesGetAll = function (req, res) {
    console.log('GET all moves');
    res
        .status(200)
        .json(movesData);
};

module.exports.movesGetOne = function (req, res) {
    //noinspection JSUnresolvedVariable
    var movesId = req.params.movesId;
    var thisMove = movesData[movesId];

    console.log('GET one specific move');
    res
        .status(200)
        .json(thisMove)
};
