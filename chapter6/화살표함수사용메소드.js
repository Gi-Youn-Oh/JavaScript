// this 키워드 차이
// function () {} 익명함수와 ()=> {} 화살표 함수는 this키워드를 다루는 방식이 다르다.

const test = {
    a: function(){
        console.log(this)
    },
    b: () => {
        console.log(this)
    }
}

test.a()
test.b()

// 책 252p 참고