// JSON
// Javascript Object Notation

// 1. Object to JSON
{
  let json = JSON.stringify(true);
  console.log("premitive : ", json);
}

{
  let json = JSON.stringify(['apple','banana']);
  console.log("premitive : ", json);
}

{
  const rabit = {
    name:'tori',
    color: 'white',
    size:'null',
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump: () => {
      console.log(`${this.name} can jump!`);
    },
  };

  const json = JSON.stringify(rabit);
  console.log(json);
}

{
  const rabit = {
    name:'tori',
    color: 'white',
    size:'null',
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump: () => {
      console.log(`${this.name} can jump!`);
    },
  };

  const json = JSON.stringify(rabit, ["name", 'size']);
  console.log(json);
}

{
  const rabit = {
    name:'tori',
    color: 'white',
    size:'null',
    birthDate: new Date(),
    jump: () => {
      console.log(`${this.name} can jump!`);
    },
  };

  const json = JSON.stringify(rabit, (key, value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'hojune' : value; // value의 return을 주어야 작동
  });
  console.log(json);
}



// 2. JSON to Object
let Rabit =  {
  name:'tori',
  color: 'white',
  size:'null',
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};
let Json = JSON.stringify(Rabit);

{
  const obj = JSON.parse(Json);
  console.log(obj);

  Rabit.jump();
  //obj.jump(); // 존재하지 않음, serial 이후 function은 없기 때문
}

{
  const obj = JSON.parse(Json);
  console.log(Rabit.birthDate.getDate());
  // console.log(obj.birthDate.getDate()); // 실행 안됨
  // 객체 안의 string 함수가 호출되고 나서 남은게 JSON이 되므로
}

{
  const obj = JSON.parse(Json, (key, value)=>{
    return key === 'birthDate' ? new Date(value) : value;
  });
  console.log(Rabit.birthDate.getDate());
  console.log(obj.birthDate.getDate()); // 실행 가능
  // key값을 바꿔줌
}