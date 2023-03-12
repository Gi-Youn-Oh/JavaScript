// const Car = function () {
//     this.wheels = 4;
//     this.drive = function () {
//         console.log('drive');
//     };
// };

const Bmw = function (color) {
    this.color = color;
};

// instanceof  || constructor를 통해 확인 가능

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//     console.log('drive');
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function () {
//     console.log('stop');
// }

Bmw.prototype = {
    constuctor: Bmw, // 생성사 명시
    wheels: 4,
    drive: function () {
        console.log('drive');
    },
    navigation: 1,
    stop: function () {
        console.log('stop');
    },
}


const benz = new Bmw("white");
const bmw = new Bmw("black");

// benz.__proto__ = Car;
// bmw.__proto__ = Car;


// 화살표 함수는 non-constructor이다.
const Person = name => {
    this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype')); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype); // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor이다.
const obj = {
    foo() {}
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj.foo.hasOwnProperty('prototype')); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(obj.foo.prototype); // undefined