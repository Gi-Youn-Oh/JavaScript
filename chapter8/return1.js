function test() {
    try{
        alert('A 위치입니다.')
        throw "예외 강제 발생" // throw 키워드로 예외 강제 발생
    }catch (exception) {
        alert('B 위치입니다.')
        return
    }
    alert("C 위치입니다.")
}

test()