/**
 * 2차원 배열 순회 문제
 * m x n 사이즈 배열을 나선형으로 순회
4곳 좌 우 상 하 코너포인터를 각각 변수에 저장 & 초기화
Top Left 코너에서 시작, 첫번째 row 왼쪽 -> 오른쪽 순회, 순회가 끝나면 Top포인터 +1
Right Top 코너에서 시작, 최상단 우축 -> 하단 순회, 순회가 끝나면 Right포인터 -1
Right Bottom 코너에서 시작, 최하단 우측 -> 좌측 순회, 순회가 끝나면 Bottom포인터 -1
Left Bottom 코너에서 시작, 최하단 좌측 -> 상단 순회, 순회가 끝나면 Left포인터 +1 
* */

const test1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const test2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

function spiralMatrix(matrix){
    const result = [];

    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while(left <= right && top <= bottom) {
        // Top Left -> Right
        for(let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Right Top -> Bottom
        for(let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            // Right Bottom -> Left
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <=right) {
            // Left Bottom -> Top
            for(let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}

console.log(spiralMatrix(test1));
console.log(spiralMatrix(test2));