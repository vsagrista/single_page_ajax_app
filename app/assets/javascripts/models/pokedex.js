var Pokedex = function(){
	this.url = "http://pokeapi.co/api/v1/pokedex/1"; 	
	this.pokedexList = [];
}

Pokedex.prototype.fetch = function(){
	$.ajax({
		url: this.url,
		method: "GET",
		success: 
			this.getResults.bind(this)		
	})
}

Pokedex.prototype.getResults = function(object){
	
	this.pokedexList.push(object.pokemon)
	
	var new_component = new PokedexComponent(this.pokedexList,$container)
	new_component.render()
	
}

module.exports = Pokedex


// this.pokedexList[0].forEach(function(pokemon) {
//     console.log(pokemon.name);
// });
