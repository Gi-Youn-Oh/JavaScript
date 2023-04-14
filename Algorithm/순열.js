// 주어진 n 엘리먼트들의 모든 경우의 수를 계산하는 방법 O(n!) 시간복잡도
// 백트래킹, dfs 활용 접근

/** 백트래킹 패턴
 * 반복 - 주어진 인풋 엘리먼트들에 반복문
 * 선택 - 탐색 타겟을 설정, 선택을 통해 엘리먼트 순서 교체
 * 탐색 - DFS를 활용해 탐색 실행
 * 선택 취소 - 선택 과정 다시 복구하기 undo
 * */ 

function permutate(arr) {
    const result =[];
    console.log(arr.length,'arr.length')
    //DFS
    const dfs = (i, arr) => {
        console.log(i, '호출 카운트')
        //base condition
        if (i === arr.length) {
            console.log(i,'i check')
            console.log(arr, "when")
            return result.push([...arr]);
        }

        for (let j = i; j < arr.length; j++) {
            console.log(i,'i',j,'j');
            console.log(arr,'arr');
            //swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            //DFS
            dfs(i + 1, arr);
            //undo
            console.log('>>>?',i ,j);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            console.log("??")
        }
    }
    dfs(0, arr);
    return result;
}

console.log(permutate(["a", "b", "c"]));
