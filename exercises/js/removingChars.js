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

function deleteTheChar(cadena,chars){
  var indexChar = cadena.findChars(chars);
  var newString = cadena.slice(0,indexChar[0]);
	for(var i = 0; i < indexChar.length; i++){
    newString += cadena.slice(indexChar[i] + 1, indexChar[i + 1]);
    return newString;
	}
}

deleteTheChar("how are you", "abc");
deleteTheChar("hello world", "def");
	