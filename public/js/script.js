(function(){
//noinspection JSUnresolvedVariable
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var pokemonUrl = 'https://pokemon-stats-api.herokuapp.com/api/pokemon';
var typesUrl = 'https://pokemon-stats-api.herokuapp.com/api/types';
var movesUrl = 'https://pokemon-stats-api.herokuapp.com/api/moves';

$.get(pokemonUrl, function (data) {
    data.forEach(function (el) {
        var div = document.createElement('div');
        div.className = 'flex-pokemon';
        if(Array.isArray(el.evolution.names[el.evolution.stage])){
            div.innerHTML = `${el.pokedex}<br> 
                             ${el.evolution.names[el.evolution.stage][el.evolution.variation]}<br>
                             <img class="pokeImg" src="https://res.cloudinary.com/arturio1970/image/upload/v1472563118/pokemon-120/${el.pokedex.slice(1)}.png" alt="${el.pokedex}">
                            `;
        } else {
            div.innerHTML = `${el.pokedex}<br> ${el.evolution.names[el.evolution.stage]}<br>
                             <img class="pokeImg" src="https://res.cloudinary.com/arturio1970/image/upload/v1472563118/pokemon-120/${el.pokedex.slice(1)}.png" alt="${el.pokedex}">
                            `;
        }


        document.getElementById('pokemon').appendChild(div);
    })
});

$.get(movesUrl, function (data) {

    data.forEach(function (el) {
        var div = document.createElement('div');
        div.className = 'flex-move';
        div.innerHTML = el.name;
        document.getElementById('moves').appendChild(div);

    })


});

$.get(typesUrl, function (data) {

    data.forEach(function(el){
        var div = document.createElement('div');
        div.className = 'flex-type';
        div.innerHTML = capitalizeFirstLetter(el.name);
        div.style.backgroundColor = el.bgcolor;
        div.style.color = el.txtcolor || '#f5f5f5';
        document.getElementById('types').appendChild(div);
    });
});
}());
