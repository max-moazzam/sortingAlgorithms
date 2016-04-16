
//The function takes in an array parameter and recursively splits the array so that there are multiple arrays with only one number
//The function does this recursively
//Takes in an array parameter
//Merge sort works by splitting an array into individual numbers, then merging sorted arrays together continously until there is one array
//Merge sort has a complexity of n(log(n)) and is usually a very efficient and stable sorting algorithm

function mergeSort(array) {
	if (array.length < 2) {								//If the array only contains one number then it is fully split
		return array;
	}

	var middle = (array.length / 2);						//Otherwise, the middle point of the array is found
	var leftUnsorted = array.slice(0, middle);					//So that the array may be split in half
	var rightUnsorted = array.slice(middle, array.length);

  return merge(mergeSort(leftUnsorted), mergeSort(rightUnsorted));			//The function will then call the merge function after it has split itself, and return the sorted array
}

//The function will take in two arrays and merge them together in order
function merge(leftUnsorted, rightUnsorted) {						//Function takes in two parameters a left and a right, and merges them together into a sorted array

	var sorted = [];								//Variable declared to access the sorted array

	while (leftUnsorted.length && rightUnsorted.length) {				//If the left and right arrays both have data then this while loop is run

		if (leftUnsorted[0] <= rightUnsorted[0]) {				//If the first number of the left array is smaller than that of the right, it's cut out and put into the sorted array
			sorted.push(leftUnsorted.shift());
		}

		else {									//If the first number of the right array is smaller than that of the left, it's cut out and put into the sorted array
			sorted.push(rightUnsorted.shift());
		}
	}

	while (leftUnsorted.length) {							//If only the left array has remaining numbers, the rest of the array is added to the sorted array
		sorted.push(leftUnsorted.shift());
	}

	while (rightUnsorted.length) {							//If pnly the right array has reamining numbers, the rest of the array is added to the sorted array
		sorted.push(rightUnsorted.shift());
	}

return sorted;										//The sorted array is returned

}
