'use strict';

// object-oriented programming
// class : templage
// object : instance of a class

// JavaScript Classes
// - introduced in ES6
// - synthatical suagr over prototype-based inheritance


// 1. class declarations

class Person{
  
  // constructor // python _init_, java의 constructor 등과 같은 기능
  // object를 만들 때 필요한 데이터를 전달
  constructor(name, age){
    //fields
    this.name = name;
    this.age = age;

  }

  //methods -> this가 Person참조, method라서
  speak(){
    console.log(`${this.name} : hello!`);
  }
}

const hojune = new Person('hojune', '27');
console.log(hojune);
hojune.speak();


// 2.Getters and setters
class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // getter, setter python과 동일하게 함수 -> value 표현형으로 변경

  get age(){
    return this._age; // underscoreㄹ private 변수라고 명시해주어야 함
  }

  set age(value){
    if(value<0){
      // throw Error("age can not be neagative");
      this._age = 0 ? value < 0 : value; // 0이하는 0으로 변경
    }
    this._age = value;
  }

}

const user1 = new User('Steve', 'Jobs', -1);
console.log('user1 : ', user1);


// 3. Fields(public, private)
class Experiment {

  constructor(){}

  // class field
  publicField = "hi"; // can be property and others...
  #privateField = 3; // cannot be access outside the class
}

let exp = new Experiment(); // class는 생성을 new 키워드 없이 할 수 없음
console.log("publicField : ",exp.publicField);
console.log("privateField : ",exp.privateField); // undefined!


// 4. Static properties and methods

class Article {

  // instance에 상관 없이 반복적인 property나 method의 경우
  // 다음과 같이 class 원형에 선언하여 인스턴스가 참조하게 함
  // static 안의 this는 생성자 class를 가리킨다.
  // instance의 this는 class로 부터 나온 객체
  ////////////////
  //  instance에서 접근을 못하므로, 메모리 낭비가 적음
  ////////////////
  static publisher = 'Dream coding';

  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }

}

const article1 = new Article(1);
const article2 = new Article(2);

// static은 instance에서 접근 못함
console.log("article1.publisher : ", article1.publisher);

// static은 생성자 class로 접근해야함
console.log("Article.publisher : ", Article.publisher);



// 5. 상속
class Shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){
    console.log(`drawing color ${this.color} !`);
  }

  getArea(){
    return this.width * this.height;
  }
}

// extends 키워드로 상속
class Rectangle extends Shape{

}
const rect = new Rectangle(20, 20, 'blue');
console.log('rect 1', rect.draw());
console.log('rect 2', rect.getArea());

class Triangle extends Shape{


  // overriding
  draw(){
    super.draw(); // 부모 메써드 호출 가능
    console.log('▲');
  }
}
const tri = new Triangle(20, 20, 'red');
console.log('tri 1', tri.draw());
console.log('tri 2', tri.getArea());


// 6. Instance of
// parent - child 관계 확인
console.log(rect instanceof Rectangle);
console.log(tri instanceof Rectangle);
console.log(tri instanceof Triangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);
