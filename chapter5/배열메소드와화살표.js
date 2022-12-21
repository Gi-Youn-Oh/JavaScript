let numbers = [0,1,2,3,4,5,6,7,8,9]

// 메소드 체이닝
numbers
    .filter((value) => value % 2 === 0) // filter메소드는 배열을 return
    .map((value) => value * value)   // map 메소드도 배열을 return
    .forEach((value) => {
        console.log(value)
    })