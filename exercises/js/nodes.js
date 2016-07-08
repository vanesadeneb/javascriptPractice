function handleClick(event){
	event.stopPropagation();

	var node = event.target;
	var thisPath = node.nodeName;

	while(node.parentNode){
		node = node.parentNode;
		thisPath = node.nodeName + " > " + thisPath;
	}

	alert(thisPath);
}

//Register the click event handler for all nodes
function attachHandler(node){
	if(node == null) return;
	node.onclick = handleClick;

	for(var i = 0; i < node.childNodes.length);
		attachHandler(node.childNodes[i]);
}