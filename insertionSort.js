//Function takes in an array parameter of numbers and returns the numbers in an array using insertion sort
//Worst case n^2 , best case 
//Function sorts by inserting one number at a time into a new array

var insertionSort = function(unsorted) {
  var sorted = [];									//Sorted array declared
  sorted[0] = unsorted[0];							//First element of unsorted array is put into the sorted array

  for (i = 1; i < unsorted.length; i++) {			//For loop will go through each number of the unsorted array, from left to right
    for (j = sorted.length - 1; j >= -1; j--) {		//And compares it with the last number in the sorted array, going from right to left (largest to smallest)
      if (j===-1) {									//If the number is at the beginning of the array it must be the smallest
          sorted.splice(0, 0, unsorted[i]);			//Number being examined in the unsorted array will be added to the first index
		  j = -2;									//Loop is ended and proceeds to the next number in the unsorted array
	  }
	  else if (unsorted[i] >= sorted[j]) {			//If the number is larger or equal to the last number in the sorted array, it must be added at the end
		  sorted.splice(j+1, 0, unsorted[i]);		//So it is added at the end of the array at the position of the last index
		  j = -2;									//Loop is closed
	  }
	}
  }
  return sorted
}