//https://www.codeeval.com/browse/12/

//countAll method.- count each letter in string.
String.prototype.countAll = function(letter){
	var letterCount = 0;
	for(var i = 0; i < this.length; i++){
		if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
			letterCount++;
		}
	}
	return letterCount; 
}
//firstLetter function.- found the first letter that don't repeat in string.
var firstLetterThatDontRepeat = function(string){
	for(var i = 0; i < string.length; i++){
		var numberOfLetters = string.countAll(string[i]);
		if (numberOfLetters === 1) {
			return string[i];
		}
	}
}

firstLetterThatDontRepeat("yellow");
firstLetterThatDontRepeat("tooth");