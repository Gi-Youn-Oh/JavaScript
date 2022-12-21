// map() 메소드는 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수

let numbers = [273, 52, 103, 32, 57]

numbers = numbers.map(function(value, index, array){
    return value * value
})

numbers.forEach(console.log)

// 실행결과

// 74529 0 Array(5)
// ...
// ...