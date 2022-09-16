function truncateString(str, num) {
    if(num<str.length){
        let newStr = str.slice(0,num);
        return newStr.concat('...');
    } else {
        return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

/* Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
0.
1.
2.append the "..." ending to the end.
*/
//add comments to demonstrate logic process

//This function should accept a string and a number, and return a string which has been cut off at the specified character. also, the returned string has ellipses "..." added to the end. 

//TODO: I think i can use the slice() method to return part of a string...

//TODO: i need to define this function which accepts the two arguments and returns a string:

function truncateString(string, number){
    //TODO: inside this function i need to do the following:
    //TODO: 1. make a copy of the string, and call it stringCopy
    //TODO: 2. slice from (0, number) and save it to stringCopy
    //TODO: 3. concat() the ellipses "..." to the end of stringCopy, saving this new value as truncatedString
    //TODO: 4. return truncatedString as the result of running this function. 
};



//=============================================================================

// but how would you even do what the slice() method does?

// at first glance, it seems like what it does is just loop through each index of a string and concat or add it to a placeholder variable.... i would describe it in the case of the following example:

// given the string "happy times" and the number 7, slice it. 
// well I can count starting at 0 and up to but not including 7...
// "happy t" is what we should slice out because it's starting at the index of 0, "h" and looping through concatting each index, up to but not including 7 - the 6th index, "t". 

// the placeholder string should be initialized as empty to start, ''.
// let placeholderString = ''
//
// then, a for loop would look like this to start, ending at i < number...
/* 
    for(let i = 0; i < 7; i++){
        placeholderString = placeholderString + string[i]
    }
*/

//this ensures that on the first iteration of the loop that empty string "" gets the first index, string[0], concatted onto it, reassigning the value of placeholderString from "" to "h". 