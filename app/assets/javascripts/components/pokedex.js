var PokedexComponent = function(pokedex, container) {
	this.pokedex = pokedex;
  	this.container = container
  	
}

PokedexComponent.prototype.template = function(pokedex) {
	for (var i=0; i<pokedex.length;i++){
		var pokedex = pokedex[0]
		for (i=0; i<pokedex.length; i++){
  			this.container.append(`<a class='link' href="javascript:;"><p>${pokedex[i].name}</p></a>`)
  		}
  	}
}

PokedexComponent.prototype.render = function () {
 var html = this.template(this.pokedex)
 this.container.html(html)
}

module.exports = PokedexComponent
