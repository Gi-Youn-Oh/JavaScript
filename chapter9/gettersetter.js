class Square{
    #length

    constructor(length){
        this.setLength(length)
    }

    setLength(value){
        if (value <= 0){
            throw '길이가 0보다 커야 합니다.'
        }
        this.#length = value
    }
    
    getLength (value){
        return this.#length
    }

    getPerimeter () {return 4 * this.#length}
    getArea() {return this.#length * this.#length}
}

const square = new Square(10)
console.log (`한 변의 길이는 ${square.getLength()}입니다.`)

//예외발생시키기
square.setLength(-10)

// 게터와 세터는 필요한 경우에만 사용
// 사용자가 값을 읽는 것을 거부하겠다면 게터 X
// 사용자가 값을 지정하는 것을 거부하겠다면 세터 x
// 혹은 둘다