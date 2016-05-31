//Node object.- Collection of nodes
function Node(initdata){
	this.data = initdata;
	this.next = null;
	this.getData = function(){
		return this.data;
	}
	this.getNext = function(){
		return this.next;
	} 
	this.setData = function(newdata){
		this.data = newdata;
	}
	this.setNext = function(newnext){
		this.next = newnext;
	}
};
var temp = new Node(93);

//Unordered List Object.- It must maintain a reference to the first node (linked list)

var mylist = new UnorderedList();
function UnorderedList(){
	this.head = null;
	this.isEmpty = function(){//isEmpty method.- Checks to see it the head of the list is a reference to null
		return this.head == null;
	}
	this.add = function(item){ // add method.- Adding items to linked list.
		temp = new Node(item);
		temp.setNext(this.head);
		this.head = temp;
	}
	this. size = function(){ //counting the number of nodes in the list
		var current = this.head;
		var count = 0;
		while(current !== null){
			count += 1;
			current = current.getNext();
		}
		return count;
	}
	this.search = function(item){
		current = this.head;
		var found = false;
		while (current !== null && !found){
			if (current.getData() == item) {
				found = true;
			}
			else{
				current = current.getNext();
			}
		}
		return found;
	}
	this.remove = function(item){
		current = this.head;
		var previous = null;
		found = false;
		while(!found){
			if(current.getData() == item){
				found = "true";
			}
			else{
				previous = current;
				current = current.getNext();
			}
		}
		if (previous == null){
			this.head = current.getNext();
		}
		else{
			previous.setNext(current.getNext());
		}
	}
};

mylist.add(31);
mylist.add(77);
mylist.add(17);
mylist.add(93);
mylist.add(26);
mylist.add(54);

console.log(mylist.size());
console.log(mylist.search(93));
console.log(mylist.search(100));

mylist.add(100);
console.log(mylist.search(100));
console.log(mylist.size());

mylist.remove(54);
console.log(mylist.size());
mylist.remove(93);
console.log(mylist.size());
mylist.remove(31);
console.log(mylist.size());
console.log(mylist.search(93));