// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

    console.log(fruits.join(','));
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split() 
    console.log(fruits.split(','));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    // reverse()
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    // slice(), splice()
    console.log(array.splice(0,3)); // 기존 배열 삭제
    // console.log(array.slice(0,3)); // 기존 배열 유지
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
//   find()
  {
    console.log(students.find((student)=>student.score === 90));
  }
  
  // Q6. make an array of enrolled students
  // filter()
  {
    console.log(students.filter((student)=>student.enrolled));
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map()
  {
    console.log(students.map((student)=>student.score));
  }
  
  // Q8. check if there is a student with the score lower than 50
//   some() , every()
  {
    console.log(students.some((student)=>student.score < 50)); // 하나라도 조건을 만족하면 true
    console.log(students.every((student)=>student.score < 50)); // 모든 요소가 조건을 만족해야 true
  }
  
  // Q9. compute students' average score
  // reduce()
  {
    console.log(students.reduce((prev, curr)=>prev+curr.score, 0)/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // map(), join()
  {
    console.log(students.map((student)=>student.score).join());
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
//   sort()
  {
    console.log(students.map((student)=>student.score).sort((a,b)=>a-b).join());
  }