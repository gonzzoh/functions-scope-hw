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

function checkForStudent(studentName, studentArray){
    const studentIncluded = studentArray.find(element => element === studentName);
    if (studentIncluded === undefined) {
        console.log('absent')
    }
    // return studentIncluded
}
console.log(checkForStudent('Sal', ['Arifa', 'Siara', 'John', 'Miguel']));

///////////////////////////////////////////////////////////////////////
// SUM ARRAY //





