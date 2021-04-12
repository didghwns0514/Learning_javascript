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