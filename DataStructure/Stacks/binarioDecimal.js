//De decimal a binario
function divideBy2(decNumber){
    var remstack = [];

    while(decNumber > 0){
        var rem = Math.floor(decNumber % 2);
        remstack.push(rem);
        decNumber = Math.floor(decNumber/2);
    }
    var binstack = [];
	while(remstack.length > 0){
		var remove = remstack.pop();
		binstack.push(remove);
	}
	return binstack.join("");   

}
console.log(divideBy2(42));
