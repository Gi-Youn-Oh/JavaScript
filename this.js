// this는 함수가 호출될 때 결정이 된다.

const car = {
    name: 'KIA',
    getname: function () {
        console.log("car getName",this);
    }
}

// car.getname(); // car 객체 자체

const globarCar = car.getname;
globarCar(); // window

const car2 = {
    name: 'hyundai',
    getname: car.getname
}

// car2.getname(); // car2 객체 자체

const btn = document.getElementById('button');
btn.addEventListener('click', car.getname); // 버튼 자체가 this

// this 값을 고정시켜주기 위해 bind등장
const bindGetName=car2.getname.bind(car);
bindGetName(); // Car객체로 this 고정 
btn.addEventListener('click', car.getname.bind(car)); // 버튼 자체가 this
 
//예제

// const testCar = {
//     name: 'benz',
//     getname: function () {
//         console.log("getName",this); // testCar
//         const innerFunc = function () {
//             console.log("innerFunc",this); // window
//         };
//         innerFunc();
//     },
// };

// 화살표함수에서의 this는 함수가 속해있는 곳의 상위 this를 계승받는다.
const testCar = {
        name: 'benz',
        getname: function () {
            console.log("getName",this); // testCar
            const innerFunc = () => {
                console.log("innerFunc",this); // testCar
            };
            innerFunc();
        },
    };
    
    testCar.getname();

const ageTest = {
    unit : '살',
    ageList : [10, 20, 30],
    getAgeList : function () {
        // 불가능
        const result = this.ageList.map(function(age){
            console.log('check',this);
            console.log('check unit',this.unit);
            return age+this.unit;
        });
        console.log(result);
    },
    // 가능 1
    getAgeList : function () {
        const result = this.ageList.map(function(age){
            return age+this.unit;
        },ageTest);
        console.log(result);
    },
    // 불가능 2
    getAgeList : function () {
        const result = this.ageList.map((age)=>{
            return age+this.unit;
        });
        console.log(result);
    },
};

ageTest.getAgeList();

// this를 사용할 때는 일반함수를 쓰는 것이 좋다 -> .bind()로 원한느 객체를 지정해 줄 수 있다.
// 함수 안에 있는 함수 같은 경우 같은 this를 쓴다면 화살표 함수도 좋다.

// ---

// this는 어디서든 참조 가능
// 전역에서 this는 전역 객체 window를 가리킨다.

console.log(this); // window

function squre(number) {
    // 일반 함수 내부에서 this는전역 객체 window를 가리킨다.
    console.log(this); // window
    return number * number;
}

squre(2);

const person = {
    name: 'Lee',
    getName(){
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // person
    return this.name;
    }
};
console.log(person.getName()); // Lee

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this); // Person {name: "Lee"}
}

const me = new Person('Lee');