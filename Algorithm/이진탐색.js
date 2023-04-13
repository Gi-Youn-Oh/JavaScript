// 정렬된 리스트에 사용
// 탐색범위를 절반씩 줄여가며 탐색
// 시간복잡도 O(logN)

function binarySearch(arr, target) {
    let low = 0;
    high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }   
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 2
console.log(binarySearch([10, 20, 30, 50, 70, 90, 110], 100)); // -1