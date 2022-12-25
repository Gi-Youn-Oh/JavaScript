private
// class 클래스이름 {
//     #속성 이름
//     # 메소드 이름 () {

//     }
// }

class Square{
    #length  //해당속성을 private 속성으로 사용하겠다고 미리 선언

    constructor(length){
        if (length <= 0){
            throw '길이가 0보다 커야 합니다.'
        }
        this.#length = length
    }

    getPerimeter(){return 4 * this.#length}
    getArea(){return this.#length * this.#length}
}

const square = new Square(10)
//squre.length = - 10  영향 없음
//squre.#length = - 10  오류 발생
consoleuaog (`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)
