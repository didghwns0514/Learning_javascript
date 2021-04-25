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
  
}