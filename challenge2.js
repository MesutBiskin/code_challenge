// write a function that takes an array of
// numbers and returns the larges number


exampleArray = [4, 8, 3, 10];

function findLargest(arr) {
    let largestSoFar = arr[0]//we need to remember what the largest number we`ve seen is
    for(let i=0; i < arr.length; i++){ // Loop to let us look at each number
        if(arr[i] > largestSoFar) { // If the number we`re looking at is larger
            largestSoFar = arr[i] // Start keeping track of that number instead
        }

    } // after we look at every value in the array
    return largestSoFar // return the largest number we found
}
console.log(findLargest(exampleArray))