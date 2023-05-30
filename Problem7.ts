// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.


type ArrayNumber = number[];


function findMinMax(...num:ArrayNumber):[number,number]{
     const min = Math.min(...num)
     const max = Math.max(...num)

     return [min,max];
}

const numberArray = [2,6,7,8]

const [min,max] = findMinMax(...numberArray)
