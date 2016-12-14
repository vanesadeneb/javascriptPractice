//https://www.codeeval.com/browse/13/
//findChars method.- found the index of characters in string.
String.prototype.findChars = function(letters){
	var index = [];
	for(var i = 0; i < this.length; i++){
		var letterInString = this.charAt(i);
		for(var j = 0; j < letters.length; j++){
			var letterInChars = letters.charAt(j);
			if(letterInString === letterInChars){
				index.push(i);
			}
		}
	}
	return index;
}

var deleteTheChars = function (cadena, chars) {
	var dividedString = cadena.split("");
	var indexHaveToDelete = cadena.findChars(chars);
	for (var i = 0; i < indexHaveToDelete.length; i++) {
		delete dividedString[indexHaveToDelete[i]];
	} 

	var newString = dividedString.join('');
	return newString;
	
}

deleteTheChars("how are you", "abc");
deleteTheChars("hello world", "def");
deleteTheChars("pepe pecas", "pa");