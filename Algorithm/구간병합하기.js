const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]; // output: [[1,6], [8,10], [15,18]]
const intervals2 = [
  [1, 4],
  [4, 5],
]; // output: [[1,5]]

//그리디

function solution(intervals) {
  // intervals.sort((a, b) => a[0] - b[0]); 구간 시작 시간 기준으로 정렬
  // 조건
  //1. 이전 구간의 끝시간 >= 다음 구간의 시작시간 => 병합
  //2. 아닐 경우 결과리스트에 추가

  if (intervals.length === 0) return [];
  else if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
 
  let result = [intervals[0]] 

  for (let interval of intervals) {
    console.log(intervals);
    let prev = result[result.length - 1];
    if (prev[1] >= interval[0]){
        // merge
        prev[1] = Math.max(prev[1], interval[1]);
    }else {
        result.push(interval);
    }
  }
  return result;
}

console.log(solution(intervals));