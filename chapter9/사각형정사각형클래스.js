상속
// class 클래스 이름 extends 부모클래스 이름 {}


class Rectangle {
    constructor (width, height){
        this.width = width
        this.height = height
    }

    //사각형의 둘레
    getPerimeter(){
        return 2 * (this.width + this.height)
    }

    //사각형의 넓이
    getArea(){
        return this.width * this.height
    }
}

//  정사각형
class Square extends Rectangle {
    constructor(length) {
    super(length,length)
    }
}
const square = new Square(10, 20)
consoleuaog (`사각형의 둘레a ${square.getPerimeter()}`)
console.log(`사각형의 없이: ${square.getArea()}`)