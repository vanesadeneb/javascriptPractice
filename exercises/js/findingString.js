//Extracting parts.
//slice method copy a section of a string.
var cityToCheck = "boston";
var firstChar = cityToCheck.slice(0,1); //copy one letter.
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();//transform from lowercase to uppercase.
otherChars = otherChars.toLowerCase();//transform to lowercase.
var cappedCity = firstChar + otherChars; //Concatenation uppercase with lowercases.
console.log(cappedCity);//print Boston.


//Finding segments and replacing it.
var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
var firstChar = text.indexOf("World War II");

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    console.log(text);
  }
}
//or
if (firstChar !== -1) {
  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
  console.log(text);
 }

//Finding a character at location
var firstName = "vanesa";
firstChar = firstName.slice(0,1);
var firstChar2 = firstName.charAt(0); //find the fist character
var lastChar = firstName.charAt(firstName.length -1); //find the last character
console.log(firstChar2,lastChar);

//Replacing chars
//replace method.
var newText = text.replace("World War II", "the Second World War");//only replace the fist phrase finded.
var newText = text.replace(/World War II/g, "the Second World War");// global replaced.