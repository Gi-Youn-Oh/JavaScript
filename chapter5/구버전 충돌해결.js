let pi = 3.14
console.log(`파이 값은 ${pi}입니다.`)

// 즉시호출 함수를 사용해 변수이름 충돌문제 해결
(function(){
    let pi = 3.141592
    console.log(`파이 값은 ${pi}입니다.`)
})()
