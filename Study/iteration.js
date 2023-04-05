// for of , map, filter, reduce 원본 배열 수정 xx

/**
 * 1. Basic for 문
 * 시간 복잡도 O(n)
 * */
for (let i = 0; i < 10; i ++){
    console.log(i);
}

/**
 * 2. for in 문 (객체의 속성을 열거할 때, 속성 순서 보장 xx)
 * 시간 복잡도 O(n)
 * */
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    if (obj.hasOwnProperty(key)){
        console.log(key + ': ' + obj[key])
    }
}

/**
 * 3. for of 문 (이터러블 순회, 순서보장, 순서대로 처리 시, 객체는 x but iterable한 객체는 가능, for in 보다 빠름)
 * 기존 배열을 수정하지는 않는다.
 * 시간 복잡도 O(n)
 * es6 에서는 통합 추구
 * */
// iterable => string, Array, Map, Set ..
const arr = [10, 20, 30];
for (const item of arr) {
    console.log(item);
}
// 연산 후 새로운 배열을 반환하고 싶을 때 = map
let testArr = [1, 2, 3];
let newArr = [];

for (let element of testArr) {
    newArr.push(element + 2);
}

console.log(newArr); // [3, 4, 5]


/**
 * 4. forEach 문 (배열 순회, 각 요소에 대해 콜백함수 실행, 배열을 직접 수정)
 * 시간 복잡도 O(n)
 * map() 함수와 다르게 반환값이 없다.
 * 예외가 발생해도 중단되지 않고 다음 요소에 대한 콜백함수를 실행한다.
 * */
// Current Value (명명된 매개변수) - 처리할 현재 요소
// Index (선택적 매개변수) - 처리할 현재 요소의 인덱스
// Array (선택적 매개변수) - forEach 메서드를 호출한 배열
const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(element, index, array) {
//     array[index] = element + 1;
// });
numbers.forEach((number, index, array) => {
    array[index] = number + 1;
})

console.log(numbers); // [2, 3, 4, 5, 6];

/**
 * 5. map()
 * 시간 복잡도 O(n)
 * 기존 배열을 수정하지 않고, 새로운 배열을 반환
 * 예외 발생 시 코드 중단
 * */
const origin = [1, 2, 3];
const makeArr = origin.map((e) => e + 1);
console.log(makeArr); // [2, 3, 4]

/**
 * 6. filter()
 * 시간 복잡도 O(n)
 * 배열 순회하며 해당 조건에 해당하는 요소들을 새로운 배열로 반환, 기존 배열 그대로
 * */
const before = [1, 2, 3, 4, 5];
const filtered = before.filter((e) => e > 3);
console.log(filtered); // [4, 5]

/**
 * 7. reduce
 * 시간 복잡도 O(n)
 * 배열의 왼쪽부터 콜백함수를 실행 후 누산한다.
 * 원본 배열을 유지
 * */
// 배열.reduce((acc, cur, index, arr) => {}, initialValue);
// 배열.reduce(function(acc, cur, index, arr) {}, initialValue);
// acc = accumulator 누산기, cur 현재 값, index, arr = src 원본 배열
const beforeCal = [1, 2, 3, 4, 5];
const After = before.reduce((acc, cur) => acc + cur);
console.log(After); // 15

// 활용 - 중첩 배열 펼치기
const beforeFlatten = [[0, 1], [2, 3], [4, 5]];
const flattened = beforeFlatten.reduce((acc, cur) => {
    return acc.concat(cur);
    // return acc = [...acc, ...cur];
}, []);
console.log(flattened) // [0, 1, 2, 3, 4, 5]

// {} 있으면 return 명시해줘야한다.

const test1 = [1, 2, 3];
const test2 = [4, 5, 6];
const test3 = ["a", "b", "c"];

const adding = [...test1, ...test2]; //[ 0, 1, 2, 3, 4, 5 ]
const adding2 = [...test1, ...test3]; // [ 1, 2, 3, 'a', 'b', 'c' ]
console.log(adding);

// Object methods
const obj2 = {name: "giyoun", age: 30};
//1. Object.keys(객체)
Object.keys(obj2)  //['name', 'age']

//2. Object.values(객체)
Object.values(obj2) //['giyoun', 30]

//3. Ojbect.entries(객체)
Object.entries(obj2) // [['name', 'giyoun], ["age", 30]]
