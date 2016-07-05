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


module.exports = Queue;



