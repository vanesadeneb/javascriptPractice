// event listener to respond to "Show another quote" button clicks
function getRandomQuote(){
	var randomQuote = Math.floor(Math.random() * quotes.length);
	return quotes[randomQuote];
}

function printQuote(){
	var objectQuote = getRandomQuote();
	document.getElementById('quote-box').innerHTML = '<p class="quote">' + objectQuote.quote + '</p><p class="source">' + 
	objectQuote.source + '</p>' + '<p class="tag">' + objectQuote.tag + '</p>';
}
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//when user clicks anywhere on the button, the "color" function is called
document.getElementById('loadQuote').addEventListener("click", color, false);