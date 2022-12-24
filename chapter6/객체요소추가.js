
// 전개 연산자를 사용한 객체 요소 추가
// {...객체, 자료, 자료, 자료}

const 구름 = {
    이름: '구름',
    나이: 6,
    종족: 강아지
}

const 별 = {
    ...구름,
    이름: '별',  // 기존 속성 덮어쓰기
    나이: 1,  // 기존 속성 덮어쓰기
    예방접종: true
}

console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))
