// function foo () {
//     const x = 1;
//     const y = 2;
//     // 클로저 x
//     function bar () {
//         const z = 3;
        
//         debugger;
//         // 상위 스코프의 식별자를 참조하지 않는다.
//         console.log(z);
//     }
//     return bar;
// }

// const bar = foo ();
// bar();

// function foo () {
//     const x = 1;

//     // bar함수는 클로저였지만 곧바로 소멸한다.
//     // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
//     function bar () {
//         debugger;
//         // 상위 스코프의 식별자를 참조한다.
//         console.log(x);
//     }
//     bar();
// }

// foo();

function foo () {
    const x = 1;
    const y = 2;

    // 클로저
    // 중첩함수 bar는 외부함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
    function bar () {
        debugger;
        console.log(x);
    }
    return bar;
}

const bar = foo ();
bar();

// let num = 0;

// const increase = function () {
//     return ++num;
// };

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3

const increase = (function () {
    let num = 0;
    // 클로저
    return function () {
        return ++num;
    }
}());

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
