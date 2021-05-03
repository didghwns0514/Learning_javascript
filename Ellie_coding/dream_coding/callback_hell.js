'use strict';

/**
 * Javascript it synchronous
 * Execute the code-block in order after hoisting
 * hoising : var& function declaration and undefined is done at start
 */

console.log('1');

setTimeout(() => {
  console.log('2');
}, 1000);

console.log('3');


// Synchronous callback
// high order function with callback
// function declaration is hoisted!
function printImmediately(print){
  print();
}
printImmediately(()=> console.log('hello!'));


// Asynchronous callback
function printWithDelay(print, timeout){

  setTimeout(print, timeout);
};
printWithDelay(()=>console.log('hello, delayed!'), 2000);