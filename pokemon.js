var types = ["ground", "flying", "psychic", "rock", "water", "fire", "electric", "ice", "dragon", "ghost",
 "fighting", "normal", "poison", "bug", "grass"];

var graph = {
			normal: { 
				weaknesses: ['ghosts', 'rock'],
				strengths: []
		},

			fire: {
				weaknesses: ['fire', 'water', 'rock', 'dragon'],
				strengths: ['grass', 'ice', 'bug']
			},

			water: {
				weaknesses: ['water', 'grass', 'dragon'],
				strengths: ['fire', 'ground', 'rock']
			},

			electric: {
				weaknesses: ['electric', 'grass', 'ground', 'dragon'],
				strengths: ['water', 'flying']
			},

			grass: {
				weaknesses: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon'],
				strengths: ['water', 'ground', 'rock']
			},


			ice: {
				weaknesses: ['water', 'ice'],
				strengths: ['grass', 'ground', 'flying', 'dragon']
			},

			fighting: {
				weaknesses: ['poison', 'flying', 'psychic', 'bug', 'ghost'],
				strengths: ['normal', 'ice', 'rock']
			},

			poison: {
				weaknesses: ['poison', 'ground', 'rock', 'ghost'],
				strengths: ['grass', 'bug']
			},
			
			
			ground: {
				weaknesses:["grass", "flying", "bug"],
				strengths:["fire", "electric", "poison", "rock"]
			},
			
			
			flying: {
				weaknesses: ["flying", "elecric"],
				strengths: ["ground"]
			},
			
			psychic: {
				weaknesses:["psychic"],
				strengths:["fighting", "poison"]
			},
			
			bug: {
				weaknesses:["fire", "fighting", "flying", "ghost"],
				strengths:["grass", "ice", "flying", "bug"]
			},
			
			rock: {
				weaknesses:["fighting", "ground"],
				strengths:["fire", "ice", "flying", "bug"]
			},
			
			ghost: {
				weaknesses:["normal", "psychic"],
				strengths:["ghost"]
			},
			
			dragon: {
				weaknesses:["normal"],
				strengths:["dragon"]
			},
			
		};