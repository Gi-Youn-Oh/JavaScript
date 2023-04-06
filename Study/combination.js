/**
 * 순열에 경우 [a,b,c,d] 배열이 있을 경우 a 를 선택하면 [b,c,d]가 잔여 배열로 남고 b를 선택하면 [a,c,d] 가 남고, 이런 식으로 이전 잔여배열에서 선택한 것만 제거한 배열을 남기지만
 *
 * 조합에 경우 [a,b,c,d] 배열이 있을 경우 a를 선택하면 [b,c,d]가 잔여 배열로 남고 b를 선택하면 [c,d]만을 남긴다. c를 선택할 시 [d] 만을 잔여배열로 남기면 된다.
 *
 * 조합에 경우 a,b,c,d 나 b,a,c,d 를 동일하게 보기 때문에 (순서가 중요하지 않음) b를 뽑은 조합에 경우 a를 잔여배열로 남기지 않을 경우 [a,b,c,d] 와 [b,a,c,d] 등에 중복된 경우에 수를 제거할 수 있다.
 */

// 1. 선별배열은 빈배열, 잔여배열을 원본배열로 생각한다.
// 2. 잔여배열 내의 원소를 하나씩 순회하며.forEach(value =>
//  2-1. 선별배열에 조회된 원소(value) 를 넣는다.
//  2-2. 잔여배열을 선별된 원소의 인덱스 뒤 부분을 잔여배열로 재정의한다.
//  2-3. 2-2 까지의 과정을 하나의 함수로 만들어 재귀함수를 호출한다. 새로운 선별배열, 잔여배열을 인자로 받도록한다!
// 3. 만약 선별된 배열이 특정 length를 달성 시, 재귀호출을 종료 하고 조회가 가능하도록 외부 output 배열에 기록한다.

// combi = 선별 배열, rests = 잔여 배열
const combination = (combi, rests, output) => {
    if (combi.length == 0) {
        return output.push(combi);
    }
    rests.forEach((v, idx) => {
        const rest = rests.slice(idx + 1);
        combination(([...combi, v], rest, output));
    })
}

const output = [];
combination(([], ['a', 'b', 'c', 'd'], output));

