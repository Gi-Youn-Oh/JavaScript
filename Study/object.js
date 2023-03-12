//  primitive types: number, string, boolean, null, undefined symbol
// 변수 하나당 하나의 값만 저장 가능

// const name = 'giyoun';
// const age = 4;
// print(name, age);

// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

// object
// 한 변수에 여러가지 값 저장 가능
// key와 value의 집합체
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const  giyoun = {name: 'giyoun', age: 4};
print(giyoun);

giyoun.hasJob = true; // 동적으로 추가 가능 (런타임 때)

delete giyoun.hasJob; // 동적으로 삭제 가능

// 2. Computed properties
// key should be always string
console.log(giyoun.name); // giyoun 코딩하는 그 순간 받아오고 싶을 때
console.log(giyoun['name']); // giyoun // runtime에서 결정될 때 실시간으로 원하는 key를 받아올 때

// 3. Property value shorthand

const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('giyoun', 30);

// function makePerson(name, age) {
//     return {
//         name, // name : name 키와 값의 이름이 값다면 생략 가능
//         age,
//     };
// }

// 4. Constructor Function
function Person(name, age){
    // this = {}; 생략
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in giyoun); // true
console.log('age' in giyoun); // true

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in giyoun) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
// 값에 의한 복사
const user = {name: 'giyoun', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // coder

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// assign
const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user);
console.log(user4);

// another example

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤의 객체가 앞의 객체를 덮어씀
console.log(mixed.color); // blue
console.log(mixed.size); // big


