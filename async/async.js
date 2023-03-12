// promise chaining problem

// 기존에 존재하는 promise 위에 조금 더 간편한 api를 제공하는 것이다. syntactic sugar

//1.  Async

// 1) 동기적 실행
function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}
const user = fetchUser(); // 비동기 처리를 하지 않으면 10초간 기다려야함
console.log(user); // 만약 이후에 UI를 표시하는 코드가 있다면 실행하지 않고 기다려야함

// 2) 비동기적 실행 promise
function fetchUser() {
  // do network request in 10 secs...
  return new Promise((resolve, reject) => {
    // 반드시 resoleve, reject를 호출해야함
    resolve("ellie");
  });
}

const user = fetchUser();
user.then(console.log);

// 3) 비동기적 실행 async 함수안의 코드들이 자동으로 promise 변환
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);

// 2. Await 기다려

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}

// 기존
function getBanana() {
  return delay(3000).then(() => "🍌");
}

// async await
async function getBanana() {
  await delay(1000);
  return "🍌";
}

// 기존
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log); // 6초를 기다려야 함

// async await
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// try catch
async function pickFruits() {
  try {
    const apple = await getApple(); // 사과 1초
    const banana = await getBanana(); // 바나나 1초 총 2초
  } catch {
    return "error";
  }
  return `${apple} + ${banana}`;
}

// promise 함수를 실행하면 동시 진행 총 1초 (바나나 사과 관련 없음) 지저분
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple} + ${banana}`;
}

// 3. Useful Promise APIs

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

// 둘중 하나 먼저 인것 리턴
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);