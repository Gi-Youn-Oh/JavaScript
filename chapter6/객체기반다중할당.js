
// 객체 속성 꺼내서 다중 할당하기
// { 속성 이름, 속성 이름 } = 객체
// { 식별자 = 속성 이름, 식별자 = 속성 이름} = 객체

//객체 생성
const object = {
        name: '혼자 공부하는 파이썬',
        price: 18000,
        publisher: '한빛미디어'
    }

//객체에서 변수 추출
const { name, price } = object // name과 price의 속성을 그대로 꺼낸다.
console.log(`# 속성 이름 그대로 꺼내서 출력하기`)
console.log(name, price)
console.log('')

const { a=name, b=price } = object // name 속성을 a라는 이름으로 price속성을 b라는 이름으로 꺼낸다.
console.log('# 다른 이름으로 속성 꺼내서 출력하기')
console.log(a, b)
