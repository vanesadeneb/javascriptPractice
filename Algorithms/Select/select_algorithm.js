//selection algorithm

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex]; //constante
    array[firstIndex] = array[secondIndex]; //constante
    array[secondIndex] = temp; //constante
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex]; //constante
    var minIndex = startIndex; //constante

    for(var i = minIndex + 1; i < array.length; i++) { // 
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var first = 0;
    for(var i = first; i < array.length; i++){
        var minimum = indexOfMinimum(array,i);
        swap(array,i,minimum);
    }
    
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);