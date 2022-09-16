function getIndexToIns(arr, num) {
    for(let j = 0; j<arr.length; j++) {
        for(let i = 0; i<=arr.length; i++){
            if(arr[i] <= arr[i+1]){
            }
            else if(arr[i] > arr[i+1]) {
                // console.log(arr[i],'first')
                let current = arr[i]
                let next = arr[i+1]
                arr[i] = next;
                arr[i+1] = current;
                // console.log(arr[i],'second')
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(num > arr[i] && num <= arr[i+1]) {
            return i+1;
        }
    }
    if(num <= arr[0]){
        return 0
    } return arr.length;   
}

console.log(getIndexToIns([5, 3, 20, 3], 5))

/*Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

0. i would just push the value into the array, sort it, then return the index -1 of num....
how should we sort it?
given an array of numbers [2, 5, 3], sort from lowest number to highest, lowest at index 0, highest at highest index.
0. access the value of array[0] (it's 2)
1. compare to the value of array[0+1]
2. if greater, swap the two.
3. if less, move to the next value.
*/

//add commnents to demonstrate logic process 
// this program should accept an array and a number value. it should return a number.
// the objective of the program is to return the lowest index at which the number value should be inserted into the array, after the array has been sorted from lowest to highest. the returned value should be a number, the index...


/// OOOOkay so there are two major parts : sorting the array from lowest to highest, and comparing the number given to each index in the sorted array. first we sort, then we compare. This is more compicated than other problems, but I'm ready to try!


// TODO: i need a function to be defined:
function whereDoIBelong(array, number){
    // inside the function, I need to do the following:
    //TODO: 0. make a copy of the array and push the given number onto the end of it. call it arrayCopy.
    //TODO: 1. sort the arrayCopy from lowest to highest. lowest being at array[0], highest at array[array.length-1].
        //ok honestly i know that sorting this array of numbers seems daunting, but i think i need some loop to help and ill do an example below.
            //inside of a loop i need to do the following:
            //TODO: 1. calculate the min value of the array
            //TODO: 2. slice it out and push it into the arrayCopy
            //TODO: repeat until done. 
    //TODO: 2. get the indexOf(number), save it in a variable called numberIndex
    //TODO: 3. return (numberIndex - 1)
};



//just had an idea as im writing the steps. what if you just push the number into the array, sort it, then return the indexOf(number)-1... i just want the index of the element directly preceeding the number that was pushed in. just return thast index. 



//=======================================================================================

// how would you sort this list of numbers from lowest to highest? [4, 3, 15, 12, 7]

// read the entire list once
// create an empty sortedArray to put values that have been sorted into
// calculate the maximum value of the list, push it onto the end of the sortedArray.
//calculate the minimum value of the list, shift it onto the beginning of the sortedArray.
// ....... so far, the sortedArray looks like this: [3,15]
//how would you choose the next number to take?  
