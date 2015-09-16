function Pokemon(nombre, vida, ataque ) 
{
	this.nombre = nombre;
	this.vida = vida;
	this.ataque = ataque;

	if (this.nombre == "Jigglypuff") {

		this.imagen = "http://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png";
	}
	else
	{
		this.imagen = "http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png";
	}
}

function inicio()
{
	var jigglypuff = new Pokemon("Jigglypuff", 100, 60);
	nombrePokemon1.textContent = "Nombre: " + jigglypuff.nombre;
	vidaPokemon1.textContent = "Vida: " + jigglypuff.vida;
	ataquePokemon1.textContent = "Ataque: " + jigglypuff.ataque;
	imagenPokemon1.src = jigglypuff.imagen;

	var pikachu = new Pokemon("Pikachu", 100, 40);
	nombrePokemon2.textContent = "Nombre: " + pikachu.nombre;
	vidaPokemon2.textContent = "Vida: " + pikachu.vida;
	ataquePokemon2.textContent = "Ataque: " + pikachu.ataque;
	imagenPokemon2.src = pikachu.imagen;
}