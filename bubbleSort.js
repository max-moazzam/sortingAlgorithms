//Function that takes in an array parameter and uses a bubble sort algorithm to sort the numbers
//This sorting algorithm is stable and has a worst case complexity of O(n^2) and a best case O(n)
//Bubble sort works by comparing each number to its following number and swapping it if its larger
//This will continue until enough passes have been made where there are no more swaps
//Of note, Bubble sort is named so due to the higher numbers bubbling towards the end

function bubbleSort(array) {
  var completelySorted = false;				//This variable determines if the array is completely sorted or not, which dictates if the sorting should continue or not
  
  while (completelySorted === false) {		//The while loop will continue until enough passes have been made that there are no more swaps
    completelySorted = true;				//Closes the while loop if no swaps are made

    for (i=0; i < array.length; i++) {		//For loop will compare each number with its following number
      if (array[i] > array[i+1]) {			//If the following number is smaller, then a swap is made
        var tempNumber = [];				//A temporary variable is made to store the first number
        tempNumber = array[i];
        array[i] = array[i+1];				//The first number is replaced with the second number
        array[i+1] = tempNumber;			//The second number is replaced with the first
        completelySorted = false;			//Since a swap was made, we need to continue the loop until there are no more swaps
      }
    }
  }

return array
}