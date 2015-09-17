var Pokemon = function(id){
	this.url = "/api/pokedex/1"; 
}

Pokemon.prototype.fetch = function(callback){
	var pokemon = this;
	$.ajax({
		url: this.url,
		method: "GET",
		success: function(pokemonInfo){
			$.extend(pokemon,pokemonInfo)
			callback()
		}
	})
}
module.exports = Pokemon