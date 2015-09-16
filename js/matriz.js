// var menu = ["Productos","Ventas","Contacto"];
// document.write( menu[2] );

// var foda = [ ["Fuerza","Oportunidad"] , ["Debilidades", "Amenazas"]];
// document.write(foda[0][2]);

function boom()
{
	alert("BOOM!");
	document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
}
function ganaste()
{
	document.write("Felicidades! Eres un ganador!! :)");
}
// 1 = Bomba, 0 = No hay bomba.
var campo = [ [ 1 , 0 , 0],
              [ 0 , 1 , 0],
              [ 1 , 1 , 1] ];

var textos = ["Cesped", "Bomba"];

var x, y;

alert("Estas en un campo minado\nElije una posición entre el 0 y el 2 para X y Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

if (x < 3 && y < 3) {
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if (posicion == 1) {
		boom();
	}
	else
	{
		ganaste();
	}
}
else {
	document.write("¡Te saliste del campo!");
	boom();
}
document.write(textos[posicion]);

