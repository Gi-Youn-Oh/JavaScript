function solution(strs){
    let answer = "";
    if (strs === null || strs.length === 0) return answer;

    for (let i = 0; i < strs[0].length; i++) {
        // 변수의 첫 글자 저장
        const char = strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {
            // 다른 글자가 나오면 리턴
            if (strs[j][i] !== char) return answer;
        }

        // bulid prefix
        answer += char;
    }
    return answer;
}


const strs = ["flower","flow","flight"];

console.log(solution(strs));