// Q1. make a string out of an array
{
  const fruits = ['apple', 'bannana', 'orange'];
  const result = fruits.join(', ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎,🥝,🍌,🍒';
  const result = fruits.split(',', 2);
  console.log(result);
}

// Q3. make this array look like this : 5,4,3,2,1
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

//Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(array);
  console.log(result);
}

//Q5. make new array without the first two elements - 2
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(0, 2);
  console.log(array);
  console.log(result);
}


class Student {

  constructor(name, age, enrolled, score){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('a', 29, true, 45),
  new Student('b', 28, false, 80),
  new Student('c', 30, true, 90),
  new Student('d', 40, false, 66),
  new Student('e', 18, true, 88),
];

// Q5. find students with score 90
{
  const result = students.find((
    student, index, obj)=> {
      // console.log('student : ', student);
      // console.log('index : ', index);
      // console.log('obj : ', obj);
      return student.score === 90;});

  console.log(result);
}

// Q6. find enrolled students
{
  const result = students.filter((student)=> student.enrolled === true);
  console.log(result);
}

// Q7. make array containing only the student's scores 
{
  const result = students.map((student, index)=> {
    // console.log(student);
    // console.log(index);
    return student.score;
  });

  console.log(result);
}

// Q8. Check if there is a student with the score lower than 50
{
  const result = students.some((student)=>{
    return student.score <= 50;
  });
  
  console.log(result);
}
{
  const result = students.every((student)=>{
    return student.score <= 50;
  });
  
  console.log(result);
}

// Q9. compute average score
{
  const arr = students.map((student)=> student.score);
  const result = arr.reduce((p_val, cur_val)=>{
    console.log('previous : ', p_val);
    console.log('current : ', cur_val);
    console.log('-------------------')
    return cur_val + p_val;
  });

  console.log(result);
}


{
  const result = students
    .map((student)=> student.score)
    .filter((score)=>score > 50)
    .join();

  console.log(result);
}


{
  let result = students
  .map((student)=>student.score)
  .sort((a, b)=> a-b);

  console.log('sort 1 : ', result);

  result = students
  .map((student)=>student.score)
  .sort((a, b)=> b - a);

  console.log('sort 2 : ', result);

}