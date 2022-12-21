// 인터넷에서 문자열로 데이터를 주고 받을 때는 csv, xml, cson 등 다양한 자료 표현방식 사용가능
// 현재 가장 많이 사용되는 자료 표현방식은 json 객체

// JSON = JavaScript Object Notation 객체처럼 자료를 표현하는 방식

// 값을 표현할 때는 문자열, 숫자, 불 자료형만 사용가능 (함수 등 불가)
// 문자열은 반드시 큰 따옴표로 만들어야 한다
// 키에도 반드시 따옴표를 붙여야 한다.

// 자바스크립트 객체 문자열로 변환하기
JSON.stringify()

const data = [{
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
},{
    name: 'HTML5 웹 프로그래밍 입문',
    price: 26000,
    publisher: '한빛미디어'
}]

// 자료를  JSON으로 변환
console.log(JSON.stringify(data))
console.log(JSON.stringify(data, null, 2))
// 2번째 매개변수는 객체에서 어떤 속성만 선택해서 추출하고 싶을 때 사용하거나 거의 사용하지 않으며, 일반적으로 null을 넣는다.
// 3번째 매개변수 2 = 들여쓰기 2칸
