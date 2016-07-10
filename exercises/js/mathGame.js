function generateFaces(){
	var numberOfFaces = 2;
	var leftSide = document.getElementById("leftSide");
	var rightSide = document.getElementById("rightSide");

	for(var i=0; i < numberOfFaces; i++){
		var smileImage = document.createElement("img");
		smileImage.src = "img/happyFace.png";

		var topPosition = Math.floor(Math.random() * 400) + 1;
		var leftPosition = Math.floor(Math.random() * 400) + 1;

		smileImage.style.top = topPosition + "px";
		smileImage.style.left = leftPosition + "px";
		leftSide.appendChild(smileImage);

		var leftSideImages = leftSide.cloneNode(true);
		leftSideImages.removeChild(leftSideImages.lastChild);
		rightSide.appendChild(leftSideImages);

		var theBody = document.getElementsByTagName("body")[0];
	}

	var pics = document.getElementsByTagName("img");
	for(i = 0; i < pics.length; i++){
		pics[i].onclick = function(){
			return false;
		}
	}

	leftSideImages.lastChild.onclick = function nextLevel(event) {
		event.stopPropagation();
		numberOfFaces += 2;
		generateFaces();
	}
}