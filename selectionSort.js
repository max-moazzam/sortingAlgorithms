//Selection sort is a sorting algorithm with a worst case complexity of n^2
//This function will find the smallest number in an unsorted array parameter and continously add the smallest number remaining each time eventually making a sorted list from lowest to highest

function swap(array, index1, index2) {
	var firstNumber = array[index1];		//Assigns a temporary variable to store the first number to be swapped
	array[index1] = array[index2];			//Changes the first number to be swapped with the second number to be swapped
	array[index2] = firstNumber;			//Changes the second number tobe swapped with the first number to be swapped
}

function selectionSort(array) {
	for (i=0; i < array.length; i++) {				//Each number of the array will be examined
		indexOfMinimum = i;					//The original index for the minimum number will be the first number
		
		for (j = i+1; j < array.length; j++) {		//Each number is compared against all the other following numbers in the array
			if (array[j] < array[indexOfMinimum]) {	//If a number is smaller than what is currently the minimum, the index of the minimum is updated
				indexOfMinimum = j;
			}
		}
		
		if (i != indexOfMinimum) {				//At the end of each number being examined, if the place in the array differs from where the smallest number is, then it is swapped with the minimum number
		swap(array, i, indexOfMinimum)
		}
	} 

return array;
}
