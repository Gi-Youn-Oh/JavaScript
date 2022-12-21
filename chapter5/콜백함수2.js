function callThreeTimes(callback){
    for (let i = 0; i < 3, i++){
        callback(i)
    }
}

callThreeTimes(function(i){ // 익명 함수 사용하기
    console.log(`${i}번째 함수 호출`) 
})