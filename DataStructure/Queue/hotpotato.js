var Queue = require('./queue');
//console.dir(_queue);
function hotPotato(namelist, num){
	var simqueue = new Queue();
	for(var name = 0; name < namelist.length; name++){
		simqueue.enqueue(name);
	}
	while(simqueue.size() > 1){
		for( var i = 0; i < num; i++){
			simqueue.enqueue(simqueue.dequeue());
		}
		simqueue.dequeue();
	}
	return simqueue.dequeue();
}

console.log(hotPotato(["Bill","David","Susan","Jane","Kent","Brad"]),7);