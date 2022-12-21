// 여러 script 사용시 충돌이 일어날 수 있다 -> 블록, 블록함수로 해결
// scope = 변수가 존재하는 범위 스코프느 같은 단계에 있을 경우 충돌이 일어남

let pi = 3.14
console.log(`파이 값은 ${pi}입니다.`)

// 블록을 사용한 스코프 생성
{
    let pi = 3.141592
    console.log(`파이 값은 ${pi}입니다.`)
}

console.log(`파이 값은 ${pi}입니다.`)

// 함수 블록을 사용한 스코프 생성
function sample(){
    let pi = 3.141592
    console.log(`파이 값은 ${pi}입니다.`)
}
sample()
console.log(`파이값은 ${pi}입니다.`)

// 블록이 다른 경우 내부변수가 외부변수를 가리는 현상 = 섀도잉