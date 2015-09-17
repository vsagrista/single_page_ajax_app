var Pokemon = require("./models/pokemon");
var PokemonComponent = require("./components/pokemon");

var Router = function ($container) {
  this.$container = $container;
}

Router.prototype.renderPokemonComponent = function (id) {
  var pokemon = new Pokemon(id);
  var pokemonComponent = new PokemonComponent( pokemon, this.$container);

  pokemon.fetch(function () {
  	pokemonComponent.render.bind(pokemonComponent);
    pokemonComponent.render();
  });
}

module.exports = Router;
