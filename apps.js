// VERBAL QUESTIONS // 

// The parameters are the names listed in 
// the function's definition, while the 
// arguments are the actual values in the
// function.

// return changes the value of the function
// console.log makes the computer run and 
// log the function.

///////////////////////////////////////////////////////////////////////
// PALINDROME // 

// function checkPalindrome(string) {
//   const lowercaseString = string.toLowerCase();
//   const reversedString = lowercaseString.split('').reverse().join('');
//   console.log(reversedString);
//   return lowercaseString === reversedString
// }
// console.log(checkPalindrome('raDaR'));

///////////////////////////////////////////////////////////////////////
// CHECK A LIST // 

// function checkForStudent(studentName, studentArray){
//     const presentStudents = studentArray.find(element => element === studentName) 
//     if (!presentStudents) {
//         console.log('false')
//     }
// }
//     console.log(checkForStudent('Sal', ['Arifa', 'Siara', 'John', 'Miguel']));
 
   
///////////////////////////////////////////////////////////////////////
// SUM ARRAY //

const array = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[1];
}

console.log(sum);
