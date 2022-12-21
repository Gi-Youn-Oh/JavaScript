
// 객체 자료형 이름.prototype.메소드 이름 = function() {}

// 숫자 자료형에 n제곱하는 메소드 추가

// power() 메소드 추가
Number.prototype.power = function (n = 2){
    return this.valueOf() ** n // 객체내부에서 값을 꺼내 쓰는 것을 명백히 하기 위해 valueOf()
}

const a = 12
console.log('a.power():', a.power())
console.log('a.power(3):', a.power(3))
console.log('a.power(4):', a.power(4))
