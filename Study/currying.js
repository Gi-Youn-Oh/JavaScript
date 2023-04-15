// 함수형 패턴 - 커링 & 부분적용

// 커링 : 함수의 분해 기법, 다수의 인자를 가지는 함수 대신, 하나의 인자를 가지는 연속된 함수들의 중첩
// 부분적용 : 함수의 인자 일부를 고정한 새로운 함수를 생성

//Currying: f(a,b,c) -> f(a)(b)(c)

function fn(x,y) {
    return x + y;
}

fn(1,2);

function curried_fn(x){
    return function(y){
        return x + y;
    }
}

const curried_fn2 = x => y => x + y;

console.log(curried_fn(1)(2), curried_fn2(1)(2));

// 클로저로 접근가능
function makeCoffee(roastType){
    return function(sugar){
        return function(cream){
            return console.log(`Coffee, ${roastType}, sugar: ${sugar}, cream: ${cream}`);
        }
    }
}

makeCoffee('dark roast')(2)(1);

// 부분 적용
const mediumCoffee = makeCoffee('medium roast');

const order1 = mediumCoffee(1)(2);
const order2 = mediumCoffee(2)(3);

