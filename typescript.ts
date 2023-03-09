// tsc -w 타입스크립트 -> 자바스크립트 컴파일

let 이름 : string = 'Kim';
let 이름배열 : string[] = ['Kim', 'Lee', 'Park'];
let 이름객체 : { name?: string }  = { name : 'Kim' };

let 이름유니온 : string | number = 'Kim';

type Name = string | number;

let 이름타입 : Name = 'Kim';

function 함수 ( x : number) : number {// return 타입 
    return x * 2;
}

type Member = [number, boolean]; // 튜플 타입 무조건 첫째는 number 두번 째는 boolean
let giyoun: Member = [123, true];

type Test = {
    [key : string] : string; // 글자로 된 모든 object 속성의 타입은 string
}

let john : Test = {name : 'John', age : '20'}

class User {
    name : string;
    constructor(name : string){
        this.name = name;
    }
}
