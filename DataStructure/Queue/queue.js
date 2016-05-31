function Queue(){
	this.items = [];
	this.isEmpty = function(){
		return this.items.length == 0;
	}
	this.enqueue = function(item){
		this.items.unshift(item);
	}
	this.dequeue = function(){
		return this.items.pop();
	}
	this.size = function(){
		return this.items.length;
	}
};

var q = new Queue();

console.log(q.enqueue(4));
console.log(q.enqueue("dog"));
console.log(q.enqueue("True"));
console.log(q.size());
console.log(q.isEmpty());



