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