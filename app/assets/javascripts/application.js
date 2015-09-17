// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

window.$container = $(".pokedex-container");
var Router = require("./app_router.js");
window.Pokemon = require("./models/pokemon.js")
window.Component = require('./components/pokemon')
window.pokemon_object = new Pokemon//(1)



window.Pokedex = require("./models/pokedex.js")
window.PokedexComponent = require("./components/pokedex.js")

window.pokedex_object = new Pokedex
pokedex_object.fetch()

var new_component = new PokedexComponent(pokedex_object.pokedexList,$container)
new_component.render()

window.router = new Router(pokemon_object,$container);
















