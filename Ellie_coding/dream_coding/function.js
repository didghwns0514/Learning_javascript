/*
Function
-----------------
- fundamental building block in the program
- subprogram can be used multiple times
- preforms a task or calculates a value
*/ 


/* 
1. Function declaration
function name(param1, param2) {body ... return;}

1) action scope of function
one function === do one thing and no more

2) naming
doSomething, command === verb + noun
eg) createCardAndPoing -> createCard, createPoint

3) Object
function is an object in JS
and is a first class citizen
: meaning can be treated like a variable
( can be passed as a parameter, returned from function )
*/

function logger(message){
  console.log(message);
}

logger('hello@!');
logger(1234);


// 2. Parameter
/*
premitive parameters : passed by value
object parameters : passed by reference
*/
function changeName(obj){
  obj.name = 'coder'; // change objects reference, immutable
}
const hj = {name : 'hojune'};
changeName(hj);
console.log(hj);

function changeValue(variable){
  variable = 'changed!';
}
let var_temp = 'hello!';
console.log("before change : ", var_temp);
changeValue(var_temp);
console.log("after change : ", var_temp);

//3. Default Parameters ( added in ES6 )
function showMessage(message, from='unknown'){
  console.log(`${message} by ${from}`);
}
showMessage("hi");


//4. Rest parameters
function printAll(...args){
  for(let i=0; i<args.length; i++){
    console.log(args[i]);
  }
}
printAll('hi', 'its', 'hojune');

function printAll(...args){
  for(const arg of args){
    console.log('arg now : ', arg);
  }
}
printAll('hi', 'its', 'hojune');

// 5. local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'its your child!';
  }
}

// 7. early return, early exit
function upgradeUser(user){

  // 안맞는 조건인 경우 빨리 탈출
  if(user.point <= 10){
    return;
  }

  // do your logix
}

//8. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
  if(answer==='love you'){
    printYes();
  }else {
    printNo();
  }
}

const printYes = function (){
  console.log('Yes!');
}

const printNo = function print(){
  console.log('No');
}

//9. Arrow function
const simplePrint = () => console.log('simple print!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something here
  return a + b;
}
