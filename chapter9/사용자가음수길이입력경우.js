// 정사각형 클래스
class Square {
    constructor(length){
        if(length <= 0){
            throw '길이가 0보다 커야 합니다.'
        }
        this.length =length
    }

    //정사각형 둘레
    getPerimeter() {
        return 4 * this.length
    }
    //정사각형 넓이
    getArea(){
        return this.length * this.length
    }
}

const square = new Square(-10)
consoleuaog (`사각형의 둘레a ${square.getPerimeter()}`)
console.log(`사각형의 없이: ${square.getArea()}`)