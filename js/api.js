'use-strict';

var pokeapi = 'https://pokeapi.co/api/v2/pokemon/';

var toggleimage = function(element) {
  var pokemonName = $('#pokemonname').val();
  $.ajax({
    url: pokeapi + pokemonName
  }).done(function (response) {
    document.getElementById('pokemonpic').src = response.sprites.front_default;
  });
};
