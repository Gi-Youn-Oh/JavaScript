// class 클래스 이름 {
//     get 이름 () { return 값}
//     set 이름 (value) {}
// }

class Square{
    #length

    constructor(length){ // this.length에 값을 지정하면 segLength(length)메소드 부분 호출
        this.length = length
    }

    get length () {
        return this.#length
    }

    get perimeter () {
        return this.#length*4
    }

    get area() {
        return this.#length * this.#length
    }

    set length (length) {
        if (length <= 0) {
            throw '길이는 0보다 커야 합니다.'
        }
        this.#length = length
    }
}

const squareA = new Square(10)
console.log(`한 변의 길이: ${squareA.length}`)
console.log(`둘레: ${squareA.perimeter}`)
console.log(`넓이: ${squareA.area}`)

const squareB = new Square(-10)