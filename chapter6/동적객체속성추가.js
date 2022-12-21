// 객체를 처음 생성한 후에 속성을 추가하거나 제거하는 것을 동적으로 속성을 추가한다 또는 동적으로 속성을 제거한다 라고 표현한다.

// 객체 선언

const student = {}
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'

//출력
console.log(JSON.stringify(student, null, 2))