//Function will swap two elements within an array
//Takes in a parameter which is the name of the array, the index of the first element to be swapped, and the index of the second element to be swapped

function swap(array, index1, index2) {
	var firstNumber = array[index1];		//Assigns a temporary variable to store the first number to be swapped
	array[index1] = array[index2];			//Changes the first number to be swapped with the second number to be swapped
	array[index2] = firstNumber;			//Changes the second number tobe swapped with the first number to be swapped
}