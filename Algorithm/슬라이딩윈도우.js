/* 부분 배열 중 가장 큰 부분 배열의 합을 구하는 문제가 있을 때 브루투 포스로 풀게 되면 O(n*k) => O(n)으로 개선 */

(arr = [5, 7, -1, 14, 3, 12, 1, 4]), (k = 3);
function maxSumArr(arr, k) {
    let windowSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i <arr.length; i++) {
        console.log(i,'i');
        windowSum += arr[i];
        console.log(windowSum, 'windowSum');
        if(i >= k-1){
            maxSum = Math.max(windowSum, maxSum);
            windowSum -= arr[i - (k-1)]
            console.log(windowSum, 'windowSum222222');
        }
    }
    return maxSum;
}

console.log(maxSumArr(arr, k));


// k = 3
// [5, 7, -1] -> 11
// [7, -1, 14] -> 20
// [-1, 14, 3] -> 16
// [14, 3, 12] -> 29
// [3, 12, 1] -> 16
// [12, 1, 4] -> 17

// 브루투포스
function solution(arr, k) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max = Math.max(max, sum);
  }
  return max; 
}

console.log(solution(arr, k));