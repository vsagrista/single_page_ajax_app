var PokemonComponent = function(pokemon, container) {
  this.pokemon = pokemon
  this.container = container
}

PokemonComponent.prototype.template = function(pokemon) {
  return `<p>${pokemon.name}</p>`
}

PokemonComponent.prototype.render = function () {
  var html = this.template(this.pokemon)

  this.container.html(html)
}

module.exports = PokemonComponent
