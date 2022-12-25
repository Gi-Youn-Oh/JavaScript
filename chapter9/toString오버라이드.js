class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toString(){     // 오버라이드
        return `이름: ${this.name}\n나이: ${this.age}살`
    }
}

const pet = new Pet('구름', 6)
alert(pet)
console.log(pet + '')