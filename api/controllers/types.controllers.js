var typesData = require('../data/types.json');

module.exports.typesGetAll = function (req, res) {
    console.log('GET all types');
    res
        .status(200)
        .json(typesData);
};

module.exports.typesGetOne = function (req, res) {
    //noinspection JSUnresolvedVariable
    var typesId = req.params.typesId;
    var thisType = typesData[typesId];

    console.log('GET one specific move');
    res
        .status(200)
        .json(thisType)
};

