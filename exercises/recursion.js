// recursion with name */
function chirp(n){
	return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
}
console.log(chirp(4));

/* Recursion with methods */
var ninja = {
	chirp : function(n){
		return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
	}
};

console.log(ninja.chirp(4));

/* Using an inline function in a recursive fashion */
var ninja = {
	chirp: function signal(n) { 
		return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
	}
};
var samurai = { chirp: ninja.chirp };
ninja = {};

/* Using arguments.callee to reference the calling function */
var ninja = {
	chirp: function(n) { 
		return n > 1 ? arguments.callee(n - 1) + "-chirp" : "chirp";
	}
};