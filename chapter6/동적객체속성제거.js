// delete 객체.속성

const student = {}
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'

//객체 송성 제거
delete student.장래희망

console.log(JSON.stringify(student, null, 2))