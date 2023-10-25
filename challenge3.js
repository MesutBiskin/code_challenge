// Write a function that takes an array of numbers
//  and returns an array containing only the even numbers.



// array.push(5) // array.push parantez icine yazilan rakami alir arrayin sonuna ekler. array suan 5

// array.push(9) // 9 u arrayin sonuna ekledi ve array suan [5, 9] oldu.

exampleArray = [4, 3, 7, 10]

function findEvens (arr){
    let evenNumbers =[] // create empty array
    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 === 0 ){
            evenNumbers.push(arr[i])
        }

    }
    return evenNumbers
}
 console.log(findEvens(exampleArray))