let numbers = [273, 52, 103, 32, 57]

numbers = numbers.map(function(value){ // 함수내부에서 value만사용하므로 value만 넣는다.
    return value * value
})

numbers.forEach(console.log)