//Initialization of phrases already used
var alreadyUsed = [];
// event listener to respond to "Show another quote" button clicks
function getRandomQuote(){
	var indexRandomQuote = Math.floor(Math.random() * quotes.length); //Generate of indexRandomQuote
	//To compare if array alreadyUsed isn't full
	if(alreadyUsed.length !== quotes.length){
		//To compare if indexRandomQuote already exist in array alreadyUsed
		if(alreadyUsed.includes(indexRandomQuote)){
			return getRandomQuote();//Generate a new indexRandomQueote
		}else {
			alreadyUsed.push(indexRandomQuote);//add the indexRandomQueote to the array.
			return quotes[indexRandomQuote];//return the object
		}		
	}else{//If is full then...
		var lastElement = alreadyUsed[alreadyUsed.length - 1]; //store the last element of alreadyUsed
		if(lastElement !== indexRandomQuote){//to compare if lastElement is different to indexRandomQuote
			alreadyUsed = [];//if it different reset the array
			alreadyUsed.push(indexRandomQuote);// add the indexRandomQueote to the array.
			return quotes[indexRandomQuote];//return the object
		}else{//If isn't full then...
			return getRandomQuote();//Generate a new indexRandomQueote
		}
	}
}
//This function prints a phrase in the browser
function printQuote(){
	var objectQuote = getRandomQuote();//generate a phrase
	document.getElementById('quote-box').innerHTML = '<p class="quote">' + objectQuote.quote + '</p><p class="source">' + 
	objectQuote.source + '</p>' + '<p class="tag">' + objectQuote.tag + '</p>';//This is the phrase generated
}
//Change the phrase and background color after certain amount of time passes
setInterval(function () {
    printQuote();
    color();
}, 10000);

// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//when user clicks anywhere on the button, the "color" function is called
document.getElementById('loadQuote').addEventListener("click", color, false);