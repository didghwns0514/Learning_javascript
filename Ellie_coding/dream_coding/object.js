/**
 * Objects 
 * one of Javascript's datatypes
 * 
 * a collection of related data and/or functionality.
 * Nearly all objects in JS are instances of Object.
 * All have inherited methods and properties of Objects.
 * 
 * Object는 {key : value}; 의 집합체
 */


// 1. Literals and property
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

// Object로 save
// 괄호 방식 : Object literal
const hojune = {name : 'hojune', age: 4};
hojune.hasJob = true; // dynamic하게 property 추가 가능
hojune.isGraduated = true;
delete hojune.isGraduated; // property 삭제 가능 
print(hojune);

// new 방식 : Object constructor
const me = new Object(); // property dynamic하게 추가


// 2. Computed properties
console.log(hojune.name);
console.log(hojune['name']); // key를 string으로 검색 가능
hojune['hasJob'] = true; // 마찬가지로 할당 가능
// string으로 검색 = computed properties

function printValue(obj, key){

  //key는 어떤 object의 property 출력할지
  // 왜냐하면 .dot으로 property만 
  // runtime에 dynamic하게 가져올 수 없기 때문에
  console.log(obj[key]);
}
printValue(hojune, "name");


// 3. property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = MakePerson('hojune', 27);
const person4 = new MakePerson_2('newMan', 4);

// successfully returns Object if key, value are the same
function MakePerson(name, age){
  return {
    name,
    age
  }
}

// 함수 선언식 생성자
// ES6에 class 도입되기 전에 사용하던 방식
// Object마냥 쓸 수 있으므로 이렇게 사용, new 키워드로 호출, 시작은 대문자
function MakePerson_2(name, age){
    // new 키워드 때문 
    // this = {} 문맥상 생성
    this.name = name;
    this.age = age;

    // return this;
}


// 5. 'in' Operator  : property existance check
// key in Object
let person5 = new MakePerson_2('person5', 4);
console.log("'name' in person5 : ", 'name' in person5);
console.log("Object.prototype.hasOwnProperty : ", person5.hasOwnProperty('name'));


// 6. for ..in vs for..of

// for(key in obj)
console.clear();
for(key in person5){
  console.log(key);
}

// for(value of iterable)
const array = [1,2,4,5];
for(let i=0; i < array.length; i++){
  console.log('simple access to array index : ',array[i]);
}


for(val of array){
  console.log('val by for..of : ', val);
}


// 7. cloning
const user = {name : 'hojune', age:20};
const user2 = user;
user2.name = 'coder';
console.log(user);

//해결
// key copy
// shallow copy (객체 내부의 객체는 복사 안됨)
const user3 = {};
for(key in user){
  user3[key] = user[key]; // copy but assigning
}

// spread operator
// shallow copy (객체 내부의 객체는 복사 안됨)
const user3_new = { ...user3 };


//better way
// Object의 매써드를 호출해서 사용
// shallow copy (객체 내부의 객체는 복사 안됨)
const user4 = Object.assign({}, user3);
console.log('check user4 : ', user4);
user4.name = 'hidden';
console.log('user3 : ', user3);
console.log('user4 : ', user4);


const cloneObj = obj => JSON.parse(JSON.stringify(obj));

const original = {
  a: 1,
  b: {
    c: 2,
  },
  d: () => {
    console.log("hi");
  },
};

const copied = cloneObj(original);
console.log('original : ', original);
console.log('final output of copied : ', copied); // undefined