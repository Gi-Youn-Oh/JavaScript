clearTimeout(타이머_ID) //setTimeout()함수로 설정한 타이머를 제거합니다.
clearInterval(타이머_ID) //setInterval()함수로 설정한 타이머를 제거합니다.
// 타이머_ID 는 setTimeout() 함수와 setInterval()함수를 호출할 때 리턴값으로 나오는 숫자

let id
let count = 0
id = setInterval(() => {
    console.log(`1초마다 실행됩니다(${count}번째)`)
    count ++
}, 1 * 1000)

setTimeout(() =>{
    console.log('타이머를 종료합니다.')
    clearInterval(id)
}, 5 * 1000)