'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


//2. index position
const fruits = ['🍅', '🍓'];
console.log(fruits);
console.log(fruits.length);

// first , second index
console.log(fruits[0], fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[-1]); // not like python, no -1 index
console.log(fruits[fruits.length - 1]); //last item



// 3. looping over an array
for(let i=0; i < fruits.length; i++){
  console.log('fruits.length : ',fruits[i]);
}

for(let fruit of fruits){
  console.log('for of : ',fruit);
}

fruits.forEach( (value, index, total_array)=>{
  // callback으로 3가지를 받아올 수 있음
  console.log('forEach value : ', value);
  console.log('forEach index : ', index);
  console.log('forEach total_array : ', total_array);
})


// 4. Addition, deletion, copy
// push : add item to the end
fruits.push('🥝', '🍍');
console.log(fruits);

// pop : remove item from end
fruits.pop();
console.log(fruits);

// unshift : add and item to the beginning
fruits.unshift('🧀');
console.log(fruits);

// shift : remove an item in the beginning
fruits.shift('🧀');
console.log(fruits);


fruits.push('🍍');

console.log('--------')
// 5. splice
console.log(fruits);
fruits.splice(1, 1, ['🍖','🍗','🥩'],  '🥩');
console.log(fruits);

const fruits_2 = ['🍕'];
console.log('concat : ',fruits.concat(fruits_2));

fruits.push('🍕');
fruits.push('🍕');

// 6. Searching
//  find the index
console.log(fruits);
console.log(fruits.indexOf('🥝'));
console.log(fruits.indexOf('')); // non existing

// check existance
console.log(fruits.includes(''));

// get last index of multiple search results
console.log(fruits.lastIndexOf('🍕'));

// get first index of multiple search results
console.log(fruits.indexOf('🍕'));