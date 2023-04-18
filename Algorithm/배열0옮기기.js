
const input = [0, 1, 0, 3, 12]; // output: [1, 3, 12, 0, 0]
const input2 = [0] // output: [0]

// 투 포인터 활용
// i: 0, 1, 2, 3 ... 순회
// j: 조건부 

function solution (arr) {
    let j = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] !== 0){
            //swap
            console.log(arr);
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j++;
        }
    }
    return arr;
}

console.log(solution(input));