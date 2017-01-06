var alreadyUsed = [];
// event listener to respond to "Show another quote" button clicks
function getRandomQuote(){
	var indexRandomQuote = Math.floor(Math.random() * quotes.length);

	if(alreadyUsed.length !== quotes.length){
		if(alreadyUsed.includes(indexRandomQuote)){
			return getRandomQuote();
		}else {
			alreadyUsed.push(indexRandomQuote);
			return quotes[indexRandomQuote];
		}		
	}else{
		var lastElement = alreadyUsed[alreadyUsed.length - 1];
		if(lastElement !== indexRandomQuote){
			alreadyUsed = [];
			alreadyUsed.push(indexRandomQuote);
			return quotes[indexRandomQuote];
		}else{
			return getRandomQuote();
		}
	}
}
//This function prints a phrase in the browser
function printQuote(){
	var objectQuote = getRandomQuote();
	document.getElementById('quote-box').innerHTML = '<p class="quote">' + objectQuote.quote + '</p><p class="source">' + 
	objectQuote.source + '</p>' + '<p class="tag">' + objectQuote.tag + '</p>';
}

var timer = new Timer(function() {
    printQuote();
    backgroundColor();
}, 10000);

var clickButton = function(){ 
		timer.reset();
		printQuote();
		backgroundColor();	
	}

//Change the phrase and background color after certain amount of time passes
document.getElementById('loadQuote').addEventListener("click", clickButton, false);