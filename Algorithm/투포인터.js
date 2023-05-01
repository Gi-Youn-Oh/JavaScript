// 연속된 구간의 원소들을 처리하거나, 정렬된 배열에서 무언가를 구할 때 사용한다.

// 다음의 배열에서, 합이 x인 연속 부분 배열의 개수를 구하라
(arr = [1, 3, 6, 5, 2, 7, 9]), (x = 9);
function countSubArrSumOfX(arr, x) {
  let count = 0;
  let sum = 0;
  let left = 0;
  let right = 0;
  while (right <= arr.length) {
    if (sum === x) {
      count++;
      sum -= arr[left];
      left++;
    } else if (sum < x) {
      sum += arr[right];
      right++;
    } else if (sum > x) {
      sum -= arr[left];
      left++;
    }
  }
  return count;
}

console.log(countSubArrSumOfX(arr, x));

// 다음의 정렬된 배열에서 두 개의 원소의 합이 x와 같은지를 확인 후 각 원소의 인덱스를 반환하라
(arr2 = [2, 4, 5, 7, 11, 15]), (x2 = 15);
function twoSumSorted(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === x) {
      return [left, right];
    } else if (sum < x) {
      left++;
    } else if (sum > x) {
      right--;
    }
  }
  return [-1, -1];
}

console.log(twoSumSorted(arr2, x2));
