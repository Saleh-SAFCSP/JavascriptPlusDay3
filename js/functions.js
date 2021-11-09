// Functions
// Functions is part of the program

// We use functions for :
// 1- Separation of the concerns
// 2- Easy to refactor the code
// 3- Reuse the code base

// Howe to define functions
// function welcomeMessage() {
//   console.log('Welcome to the website');
// }
// welcomeMessage();

// Functions with default parameters
// function welcomeMessage(message = 'Welcome to the website') {
//   console.log(message);
// }

// welcomeMessage('You are not allowed to join this website');

// Functions with default parameters
// function welcomeMessage(firstName, lastName, age) {
//   if (age > 20) {
//     console.log('Welcome ' + firstName + ' ' + lastName + ' to the website');
//   } else {
//     console.log(firstName + ' ' + lastName + ' You are not allowed to join this website');
//   }
// }

// const aliAge = 10;
// welcomeMessage('Ali', aliAge, 'Saleh');
// function welcomeMessage() {}
// console.log(welcomeMessage());`

// function sum(number1, number2) {
//   const res = number1 + number2;
//   return res;
//   console.log('Hey from sum');
// }

// const res1 = sum(90, 8);
// const res2 = sum(10, 8);
// const finalRes = res1 + res2;

// console.log(res1);
// console.log(res2);
// console.log(finalRes);

// function checkRole(role) {
//   if (role == 'admin') {
//     return 'Show admin page';
//   } else if (role == 'superUser') {
//     return 'Show super user page';
//   } else {
//     return 'Show User page';
//   }
// }

// const role = 'user';
// console.log(checkRole(role));

// function and  =>

// The difference between the => and function keyword is in the " this " usage
// function f1() {}
// const f2 = () => {};
