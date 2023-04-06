/**
 * 순열
 * 순서가 있는 정렬의 경우의 수 만들기
 * 1. 선별배열은 빈배열, 잔여배열을 원본배열로 생각한다. [], [a, b, c]
 * 2. 잔여배열 내의 원소를 하나씩 순회하며.forEach(value =>
 *  2-1.선별배열에 조회된 원소(value) 를 넣는다. [a], [a, b, c]
 *  2-2.잔여배열을 선별된 원소가 제외된 잔여배열로 재정의한다. [a], [b, c] ... 재귀
 *  2-3. 2-2 까지의 과정을 하나의 함수로 만들어 재귀함수를 호출한다. 새로운 선별배열, 잔여배열을 인자로 받도록한다!
 * 3.만약 잔여배열이 하나도 남지 않게 된다면, 재귀호출을 종료 하고 조회가 가능하도록 외부 output 배열에 기록한다.
 */

// 만약, 원소를 모두 나열한 것이 아닌 특정 n개 원소의 순열을 원한다면, 위 코드에서 종료조건을 수정해주면 순열에 길이를 특정할 수 있다.
// 종료 조건이 rests.length == 1 일 경우,
// 잔여배열이 1이 되면 재귀를 멈추기 때문에 전체 배열 길이 4-1에 해당하는 길이의 순열을 얻을 수 있다.
// permu = 선열배열, rests = 잔여배열

const permutation = (permu, rests, output) => {
    if (rests.length == 0){
    // if (rests.length == 1){배열의길이 - 1}
        return output.push(permu);
    }
    rests.forEach((v, idx) => {
        // console.log(idx);
        // console.log(rests[0]);
        // console.log([...rests.slice(0, idx)],'before','\n');
        // console.log([...rests.slice(idx + 1)],'확인');
        const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)]
        console.log('rest: ',rest)
        permutation([...permu, v], rest, output);
    })
}

const output= [];
permutation([], ['a', 'b', 'c', 'd'], output);
console.log(output);
