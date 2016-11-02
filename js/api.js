'use-strict';

var pokeapi = 'https://pokeapi.co/api/v2/pokemon/';

var toggleimage = function(element) {
  var pokemonName = $('#pokemonname').val();

  $.ajax({
    url: pokeapi + pokemonName,
    success: function (response) {
      $('#pokemonpic').attr('src', response.sprites.front_default);
    },
    error: function (error) {
      console.log(error);
    }
  });
};
