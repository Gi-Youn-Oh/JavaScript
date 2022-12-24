
// 전개 연산자를 사용한 객체 복사
// {...객체}

// 얕은 객체 복사 
const 구름 = {
    이름: '구름',
    나이: 6,
    종족: 강아지
}

const 별 = 구름
별.이름 = '별'
별.나이 = 1

console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))
