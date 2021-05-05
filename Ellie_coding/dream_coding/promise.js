'use strict';

// promise is a JavaScript object for 
// asynchronous operation 
// state : pending -> fulfilled
// Producer vs Consumer

// 1. Producer
// when Promise is created, the executer runs Automatically
const promise = new Promise((resolve, reject)=>{
  // do some heavy work
  // ex) data reading from network ...

  //executer
  console.log('doing something...'); // promise const에 할당 순간, 바로 실행
  setTimeout(()=>{
    resolve('ellie!'); // when success

  }, 2000);
});

const promise_error = new Promise((resolve, reject)=>{
  console.log('error is about to happen...');
  setTimeout(()=>{
    reject(new Error('no network!'));
  }, 2000);
  
});


// 2. Consumers : then, catch, finally
// value gets whats returned from resolve callback in promise function
promise.then((value)=>{
  console.log(value);
});

promise_error.catch((error)=>{
  console.log(error);
});


// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(1);
  }, 1000);
});

fetchNumber  // num 1 param means same as  (num)
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(num-1);
    }, 1000);
  }))
  .then(num => console.log(num));


  //4. Error handling
const getHen = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Hen!');
    }, 1000);
  });
};

const getEgg = (hen) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //resolve(`${hen}=>Egg!`);
      reject(new Error(`error with ${hen}=>Egg!`));
    }, 1000);
  });
};

const cook = (egg) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(`${egg}=>Omlet!`);
    }, 1000);
  });
};

getHen() // 자체가 Promise가 아니고, 함수가 수행되어야 Promise를 받으므로
  .then(hen => getEgg(hen))
  .catch(error => {
    console.log('for fallback : ',error);
    return 'Bread!';
  })
  .then(egg => cook(egg))
  .then(meal => console.log(meal))
  .catch(egg => console.log(egg));