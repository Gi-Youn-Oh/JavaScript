setTimeout(함수, 시간) // 특정 시간 후에 함수를 한 번 호출
setInterval(함수, 시간) // 특정 시간마다 함수를 호출

setTimeout(() => {
    console.log('1초 후에 실행됩니다.')
}, 1 * 1000) // 밀리초 단위

let count = 0 
setInterval(() => {
    console.log(`1초마다 실행됩니다(${conut}번째)`)
    count ++
}, 1 * 1000)

