//Function inputs an array and returns a randomly shuffled array based on the Fisher-Yates algorithm
//Shuffling works by swapping in place a randomly selected element with a currently selected element descending from end to start
//As an element is randomly swapped, the number of remaining elements to swap is reduced by 1
//Algorithm has a complexity of O(n) 

function randomizeArray(array) {
	var toShuffle = array.length - 1;
	var randomIndex;
	var temp;

	//While there are still elements left to shuffle
	while(toShuffle) {
		//Pick a random element out of all the elements remaining to be shuffled
		randomIndex = Math.floor(Math.random() * toShuffle);
		
		//Swap that random element with the currently selected spot at the end of the array
		temp = array[toShuffle];
		array[toShuffle] = array[randomIndex];
		array[randomIndex] = temp;

		//Since an element has been shuffled, reduce the amount toShuffle by 1
		toShuffle--;
	}

return array;
}