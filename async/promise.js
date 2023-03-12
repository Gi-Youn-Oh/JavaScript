// 비동기적 콜백함수 대신에 사용할 수 있는 객체

// 1. state: pending -> fulfilled or rejected
// 기능 수행을 진행중일때 pending, 성공적으로 마쳤을 때 fulfilled, 실패했을 때 rejected
// 2. producer vs consumer

// 1. Producer
// when new Promise is created, the executor runs automatically. 사용자가 요구했을때만 해야하는데 불필요하게 실행된다.
// resolve, reject 는 콜백함수이다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) 비동기 처리가 효율적이다.
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// then: promise가 정상적으로 수행되었을 때
// catch: promise가 실패했을 때
// finally: 성공하든 실패하든 무조건 마지막에 실행
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

// then은 값을 바로 전달해도 되고, 비동기인 promise를 전달해도 된다.
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🥖";
  }) 
  .then(cook)
  .then(console.log)
  .catch(console.log);

//예시
// console.log('시작');
// fetch('https://www.naver.com')
//   .then((response) => response.text())
//   .then((result) => {console.log(result);});
// console.log('끝');
// 콘솔 (시작 -> 끝 -> result)
