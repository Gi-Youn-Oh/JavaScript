// prototype 기반 상속

class Person {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
};

const test = new Person('test', 20);
console.log(test.name);
console.log(test.age);

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // } 
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User("giyoun", "oh", -1);
console.log(user1.age);


class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

class Article {
    static publisher = "giyoun";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // giyoun
Article.printPublisher(); // giyoun

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 상속을 통해 공통적인 부부을 묶어서 재사용 및 수정 용이
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모의 draw 호출 기존 함수 그대로
        console.log('▲'); // 새로운 기능을 오버라이딩
    }
    // 오버라이딩 -> 다형성
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true


