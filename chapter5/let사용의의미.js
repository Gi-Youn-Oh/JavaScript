
// 과거 자바스크립트는 var 라는 키워드를 사용해 변수를 선언했다.
// var 키워드는 이전 코드처럼 덮어쓰는 문제가 발생

// 현대 자바 스크립트는 let 과 const로 변수 상수 선언
// 이러한 키워드 들은 위험을 원천적으로 차단하기 위해서 오류를 발생시킨다

// 익명함수 생성
let 함수 = function(){
    console.log('익명 함수입니다.')
}

//선언적 함수 생성 및 할당
function 함수 () {
    console.log('선언적 함수입니다.')
}
// 함수 호출
함수 ()