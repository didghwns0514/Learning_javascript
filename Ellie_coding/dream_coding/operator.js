// 1.String concatenation
console.log("my" + "cat");
console.log("1" + 2); // dynamic type
console.log(`string literals: 1+ 2 = ${1 + 2}`);

// 2. numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1); // divide
console.log(parseInt(5/2)); // quotient
console.log(1*1);
console.log(5%2); // remainder
console.log(2**3);
// python % : 나머지, // : 몫

//3. Increment and decrement operators
// decrement is the same, except for -- convention
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`); // 3, 3

counter = 2;
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);// 2, 3


//4. Assignment operators
let x = 3;
let y = 6;
x= 3; y=6;
x += y; // x = x + y
console.log(`[x += y] x : ${x}, y : ${y}`);
x= 3; y=6;
// assign first
x =+ y;
console.log(`[x =+ y] x : ${x}, y : ${y}`);
x= 3; y=6;
x -= y;
console.log(`x : ${x}, y : ${y}`);
x= 3; y=6;
x *= y;
console.log(`x : ${x}, y : ${y}`);
x= 3; y=6;
x /= y;
console.log(`x : ${x}, y : ${y}`);
// after assigned


//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6); // such....


//6. Logical operators : || or,  && and,  ! not
const value1 = false;
const value2 = 4 < 2;
// || or operator operation
console.log('check OR operator : ', value1 || value2 || checker() );

// CHECKER should be placed at the back
function checker() {
    for(let i=0; i<10; i++){
        console.log('😎 waste some time!');
    }
    return true;
}


// 7. Equality
const stringFive = '5';
const new_stringFive = '5';
const numberFive = 5;

//== lose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

console.log(stringFive === new_stringFive); // true
console.log(stringFive == new_stringFive); // true


// object
const hj1 = {name: 'hj'};
const hj2 = {name: 'hj'};
const hj3 = hj1;
console.log(hj1 == hj2); // false
console.log(hj1 === hj2); // fasle
console.log(hj1 === hj3); // true -> same reference pointers


// equality quiz
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

//8. conditional operators : if
// if, else if, else
const name = 'coder';
if(name === 'HoJun'){
    console.log('Welcome, HoJun');
}else if(name === 'coder'){
    console.log('You are an amazing coder!');
}else{
    console.log('unknown!')
}


// 9. Ternary operator
let name_ = 'HoJun'
console.log(name_ === 'HoJun' ? 'yes' : 'no');

/* 
10. Switch Statement
used for multiple if checks
use for enum-like value check
use for multiple type checks in TS
*/
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. loops
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}


// do while loop, body code is executed first,
// then check the condition
i = 3;
do{
    console.log(`do while: ${i}`);
    i--;
} while(i>0);


// for loop, for(begin; condition; step)
for(i =3; i >0; i--){
    console.log(`for: ${i}`);
}


for(i=3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}