// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// create a variable called name and assign it to 'dane'
// creat a condition that checks if name equals 'Mary'
// if it does equal Mary console.log 'Hi, Mary!'
//otherwise console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// create variable secret
// create variable code and assign it to 123
// create condition that checks if code is equal to 123
//if it is then change variable secret to 'super' and change code to code * 2
//then if code is greater than 250 change secret to 'duper'
//then console.log secret

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

conosle.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// creat variable isStudent and have it equal true
// create variable age and have it equal 34
// create variabnle zip and have it equal 55407
//create a condition that checks if isStudent is true and if zip > 80000 then console.log 'You're a student on teh West Coast
//elde if isStudent equals false or age less than 30 console.log 'What are your hobbies?'
// else if isStudent equals true console.log 'Welcome to Prime!'
//else console.log 'How about the weather>'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Make the code match the description-- comment above the problem code and a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

// number-- decrements number, and the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/





//4. We start with three variables -- colorOne is set to 'blue' and colorTwo is set to 'red', and mix is set to true. We check if mix is true
//-- it is, so we set colorOne and colorTwo to 'purple'

/*
//coloreOne should equal blue. should be: let colorOne = 'blue';
let colorOne = 'red';
//coloreTwo should equal red. should be: let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//should also set colorTwo to purple.
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// should be and instead of or. &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!);
}
//would be good to have an else statement
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is less than minAge
// -- they are not, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//this is backwards should be if(age < minAge)
if(minAge < age) {
  console.log('enter');
//doesn't ask us for an else statement but it probably should
} else {
  console.log('no entry');
}
*/
