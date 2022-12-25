function test(object){
    if(object.a !== undefined && object.b !== undefined){
        console.log(object.a + object.b)
    }else{
        throw new Error('a 속성과 b 속성을 지정하지 않았습니다.')
    }
}

test({})

// 일반적 프로그래밍 언어라면
// object 객체에 a나 b라는 속성이 없으므로 예외를 발생시킬 것이고
// 존재하지 않는 것을 더하므로 +를 할때도 예외발생
// 하지만 자바스크립트는 둘다 undefined + undefined = NaN