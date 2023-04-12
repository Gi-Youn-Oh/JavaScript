// 스택활용
function solution(s) {
    let stackCount = 9;
    for (let i of s) {
        stackCount += i === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}