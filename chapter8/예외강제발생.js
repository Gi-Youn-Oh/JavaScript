// 단순 예외 발생
throw 문자열
// 조금 더 자세하게 예외 발생
throw new Error(문자열)

function divide(a, b){
    if (b === 0){
        throw '0으로는 나눌 수 없습니다.'
    }
    return a/b
}

console.log(divide(10, 2))
console.log(divide(10, 0))
