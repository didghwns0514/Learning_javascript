'use strict';

// async & await
// clear style of using promise

// 1. async

// function fetchUser() {
//   // do network request in 10 seconds...
//   // async 처리 없을 시, 여기서 hold되어 user exprience 좋지 않음
//   // resolve / reject 결과를 resolve / reject 콜백으로 넘겨주지 않으면
//   // 계속 pending 상태가 되므로 유의
// return new Promise((resolve, reject) => {

//   resolve( 'ellie' );
// });
// }

// const user = fetchUser();
// console.log(user);
// user.then(name => console.log(name));


// async function async_fetchUser() {
//   // do network request in 10 seconds...
//   // new promise syntax를 async가 대신 수행
//   return 'ellie';
// }

// const user_2 = async_fetchUser();
// console.log(user_2);
// user_2.then(name => console.log(name));


// 2. await
function delay(ms, request_name) {
  return new Promise((resolve, reject)=>{
    console.log(`request of ${request_name} is pending now!`);
    setTimeout(()=>{
      console.log(`${request_name} finished..!`);
      resolve(ms);
    },ms); // setTimeout이미 비동기 함수
    
  });
}

async function getApple(){
  await delay(1000, 'getApple');
  //throw 'Error'; // 에러를 발생시킨 경우
  return 'Apple!';
}

async function getApple_nonasync(){
  delay(1000, 'getApple_nonasync');
  return 'Apple_noasync!';
}

async function getBanana(){
  await delay(2000, 'getBanana');
  return 'Banana!';
}

// const apple = getApple();
// const apple_noasync = getApple_nonasync();
// const banana = getBanana();
// apple.then(console.log);
// apple_noasync.then(console.log);
// banana.then(console.log);


// function pick_fruit_badExample(){

//   return getApple()
//     .then((apple)=> {
//       return getBanana((banana)=>{
//         return `${apple} + ${banana}`;
//       });
//     });
// }

// pick_fruit_badExample().then(console.log);


async function pick_fruit_goodExample(){  

  try{
    const apple_promise = getApple(); // 여기서 내부 코드 바로 수행
    const banana_promise = getBanana();

    let apple = await apple_promise(); // 여기서 기다림
    let banana = await banana_promise();

    return `${apple} + ${banana}`;

  } 
  catch(e) {
    console.log(`error : ${e}`);
    let apple = 'fallback_apple!';
    let banana = "fallback_banana!";

    return `${apple} + ${banana}`;
  } 
  finally {
    
  }

  
}

// pick_fruit_goodExample().then(console.log);


// 3. useful API
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
    .then(fruits_arr => fruits_arr.join('+'));
}
//pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(race=>console.log('single output : ', race));