// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

function evenSum(num:number[]):number{
   let count = 0; 
  for(const value of num){
     if(value % 2 === 0){
       count = count + value;
     }
  }
  return count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
