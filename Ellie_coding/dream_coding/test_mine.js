const calcWith2 = (op) => {
  
  console.log(op);
  return (num) => {
      console.log('expected : ', op(2, num));
      return op(2, num);
  };
};

let num = 3;
let add = (a, b) => {return a + b};
let add_function = calcWith2(add);
console.log('add_function : ',add_function);
console.log('add_function result : ',add_function(num));