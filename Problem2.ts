// Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.


// brut force Solution

function compareArray(paraam1:number[],param2:number[]):number[]{
    const newArray:number[] = [];
    for(let i= 0 ; i<paraam1.length;i++ ){
        for(let j= 0; j<param2.length;j++){
            if(paraam1[i] ===  param2[j]){
                newArray.push(paraam1[i]);
            }
        }
    }
    return newArray;
}


const test1 = compareArray([1, 2, 3, 4, 5],[2, 4, 6, 8]);

// better Solution

function getCommonElements(paraam1:number[],param2:number[]):number[]{
    const commonArray:number[] = [];
    for(const num of paraam1 ){
        if(param2.includes(num)){
            commonArray.push(num)
        }
    }
    return commonArray;
}


const test2 = compareArray([1, 2, 3, 4, 5],[2, 4, 6, 8]);