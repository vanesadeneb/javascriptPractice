function parChecker(symbolString){
	var stack = [];
	var balanced = true;
	var index = 0;
	while(index < symbolString.length && balanced == true){
		var symbol = symbolString[index];
		if(symbol == "("){
			stack.push(symbol);
		}
		else if(stack == ""){
			balanced = false;
		}
		else{
			stack.pop();
		}
		index = index + 1;
	}
	
	if(balanced == true && stack == ""){
		return "True";
	}
	else {
		return "False";	
	}
}

console.log(parChecker('((()))'));
console.log(parChecker('((()'));