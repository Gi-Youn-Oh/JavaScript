/*
당신 앞에 계단이 있습니다. n개의 계단을 올라야 꼭대기에 도착할 수 있고, 한번에 1 또는 2계단씩 올라갈 수 있다고 했을 때, 꼭대기에 도달할 수 있는 경우의 수가 몇 가지일까?
*/



const input1 = 2; // 2 (1, 1), (2)
const input2 = 3; // 3 (1, 1, 1), (1, 2), (2, 1)
const input3 = 4; // 5 (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (2, 1, 1), (2, 2)

// (n-1) + (n-2) 
// n이 증가할때 마다 2^n의 시간복잡도를 가지게 된다. Bad
// fn(n):{
//     if(n===1 || n===2) return 1;
//     return fn(n-1) + fn(n-2);
// }

// DP
// 각 연산마다 결과를 메모리에 저장해두고, 다음 연산에 활용한다.
// dp = new Array(n+1)
// dp[i] = dp[i-1] + dp[i-2]
// 메모리는 사용하지만 O(n) 선형시간복잡도를 가진다.

function solution(n) {
    if(n == 0){
        return 0;
    }

    let dp = new Array(n+1);

    dp[1] = 1;
    dp[2] = 2;

    for(let i=3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

console.log(solution(input3));