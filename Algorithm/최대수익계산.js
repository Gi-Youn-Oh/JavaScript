//  최대 수익 계산하기
// - n 기간 동안 주식 가격 변화를 기준으로 낼 수 있는 가장 큰 수익 계산

// 기간중 가장 쌀 때 주식을 구입, 가장 비쌀 때 주식 판매
// 3일 동안 주식 가격이 [100, 50, 250] 이라면 최대이익은 200

// 풀이
// 1. 최대 이익, 최저 가격 초기화
// 2. input 배열 반복문 실행
// 3. 1) 현재의 가격이 최저가격보다 크면 -> 수익발생, 최대 수익 갱신, 2) 현재의 가격이 최저 가격보다 작을 때 -> 수익 발생x, 최저 가격 갱신
// 4. 반복문 종료후 최대 이익 값 리턴

const input = [100, 200, 50, 30, 150, 250];


function solution(input) {
    let maxProfit = 0;
    let minPrice = input[0];
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] > minPrice) {
    //         maxProfit = Math.max(maxProfit, input[i] - minPrice)
    //     }else if (input[i] < minPrice) {
    //         minPrice = input[i]
    //     }
    // }
    for (let price of input) {
        if(minPrice < price) {
            maxProfit = Math.max(maxProfit, price - minPrice)
        }else{
            minPrice = price
        }
    }
    return maxProfit;
}

console.log(solution(input));