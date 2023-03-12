// 자바스크립트는 동기적이다.

// console.log("1");
// // browser API 응답을 기다리지 않고 다음 코드를 실행한다.
// setTimeout(() => console.log("2"), 1000); // 1초가 지난 뒤에 실행해줘 => call back
// console.log("3");

// // callback 은 항상 비동기? no 


// synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log("hello")); 

// asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
} 
printWithDelay(() => console.log("async callback"), 2000);


// function printImmediately(print) {
//     print();
// }

// function printWithDelay(print, timeout) {
//     setTimeout(print, timeout);
// } 

console.log("1"); // 동기
setTimeout(() => console.log("2"), 1000); // 비동기
console.log("3"); // 동기
printImmediately(() => console.log("hello")); // 동기
printWithDelay(() => console.log("async callback"), 2000); // 비동기